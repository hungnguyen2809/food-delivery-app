/* eslint-disable react-native/no-inline-styles */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from 'src/app/hooks';
import {Separator, TextBase, ToastSnackbar} from 'src/components';
import {Colors, General} from 'src/constants';
import {actionRestaurentList} from 'src/redux/restaurent/actions';
import {selectorRestaurentList} from 'src/redux/restaurent/selectors';
import {getMessageError, scale, setHeight} from 'src/utils';
import {listSort} from './common';
import {CategoryMenuItem, RestaurantMediumCard, RestaurentCard} from './components';
import {styles} from './styles';

const sortStyle = (isActive: boolean) => {
  return isActive
    ? styles.sortListItem
    : {...styles.sortListItem, borderBottomColor: Colors.DEFAULT_WHITE};
};

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  const listRestaurent = useAppSelector(selectorRestaurentList);

  const [activeCategory, setActiveCategory] = useState<string>('');
  const [activeSortItem, setActiveSortItem] = useState(listSort[0].value);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(actionRestaurentList())
        .unwrap()
        .catch((error) => {
          ToastSnackbar.open(getMessageError(error));
        });
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} />
      <Separator safeTop />
      <View style={styles.backgroundCurvedContainer} />

      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={15} color={Colors.DEFAULT_WHITE} />
          <TextBase style={styles.locationText}>Delivered to</TextBase>
          <TextBase style={styles.selectedLocationText}>HOME</TextBase>
          <MaterialIcons name="keyboard-arrow-down" size={16} color={Colors.DEFAULT_YELLOW} />
          <Feather
            size={24}
            name="bell"
            color={Colors.DEFAULT_WHITE}
            style={{position: 'absolute', right: 0}}
          />
          <View style={styles.alertBadge}>
            <TextBase style={styles.alertBadgeText}>12</TextBase>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchSection}>
            <Ionicons name="search-outline" size={25} color={Colors.DEFAULT_GREY} />
            <TextBase style={styles.searchText}>Search...</TextBase>
          </View>
          <Feather
            size={20}
            name="sliders"
            color={Colors.DEFAULT_YELLOW}
            style={{marginRight: scale(10)}}
          />
        </View>

        <View style={styles.categoriesContainer}>
          {General.CATEGORIES.map((item, idx) => (
            <CategoryMenuItem
              key={idx}
              {...item}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </View>
      </View>

      <ScrollView style={styles.listContainer}>
        <View style={styles.horizontalListContainer}>
          <View style={styles.listHeader}>
            <TextBase style={styles.listHeaderTitle}>Top Rated</TextBase>
            <TextBase style={styles.listHeaderSubtitle}>See All</TextBase>
          </View>
          <FlatList
            horizontal
            data={listRestaurent}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => <RestaurentCard row={item} />}
            ListHeaderComponent={() => <Separator width={20} />}
            ListFooterComponent={() => <Separator width={20} />}
            ItemSeparatorComponent={() => <Separator width={10} />}
          />
        </View>

        <View style={styles.sortListContainer}>
          {listSort.map((item) => (
            <TouchableOpacity
              key={item.value}
              activeOpacity={0.8}
              onPress={() => setActiveSortItem(item.value)}
              style={sortStyle(activeSortItem === item.value)}
            >
              <TextBase style={styles.sortListItemText}>{item.label}</TextBase>
            </TouchableOpacity>
          ))}
        </View>

        {listRestaurent?.map((item) => (
          <RestaurantMediumCard key={item?.id} row={item} />
        ))}
        <Separator height={setHeight(5)} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

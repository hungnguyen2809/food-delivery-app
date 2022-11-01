import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Image, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StaticImageApi, STATIC_IMAGE} from 'src/api';
import {useAppDispatch} from 'src/app/hooks';
import {Separator, TextBase, ToastSnackbar} from 'src/components';
import {Colors, Images} from 'src/constants';
import {actionRestaurentGetOne} from 'src/redux/restaurent/actions';
import {getMessageError, scale, setHeight} from 'src/utils';
import {CategoryListItem, FoodCard, ListFooter, ListHeader} from './components';
import {styles} from './styles';

type ParamsRoute = Readonly<{restaurentId?: string}> | undefined;

const RestaurantScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const params = useMemo((): ParamsRoute => route.params, [route]);
  const navigation = useNavigation<NavigationProp<any>>();

  const [restaurant, setRestaurant] = useState<Restaurent.RestaurentFood>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (params?.restaurentId) {
      dispatch(actionRestaurentGetOne({restaurentId: params?.restaurentId}))
        .unwrap()
        .then((data) => {
          setRestaurant(data);
          setSelectedCategory(data?.categories[0]);
        })
        .catch((error) => {
          ToastSnackbar.open(getMessageError(error));
        });
    }
  }, [dispatch, params?.restaurentId]);

  const handleBoolmark = () => {
    if (isBookmarked) {
      setIsBookmarked(false);
    } else {
      setIsBookmarked(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />

      <Image
        source={{
          uri: StaticImageApi.getGalleryImage(
            restaurant?.images?.cover || '',
            STATIC_IMAGE.SIZE.SQUARE,
          ),
        }}
        style={styles.backgroundImage}
      />

      <ScrollView>
        <View style={[styles.mainButtonBack, {top: insets.top}]}>
          <TouchableOpacity onPress={navigation.goBack} style={styles.containerButtonBack}>
            <Ionicons name="chevron-back-outline" size={scale(30)} />
          </TouchableOpacity>
        </View>

        <Separator height={setHeight(30)} />

        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <TextBase style={styles.title}>{restaurant?.name}</TextBase>
            <TouchableOpacity activeOpacity={0.5} onPress={handleBoolmark}>
              <Ionicons
                size={24}
                name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                color={Colors.DEFAULT_YELLOW}
              />
            </TouchableOpacity>
          </View>

          <TextBase style={styles.tagText}>{restaurant?.tags?.join(' • ')}</TextBase>

          <View style={styles.ratingReviewsContainer}>
            <FontAwesome name="star" size={18} color={Colors.DEFAULT_YELLOW} />
            <TextBase style={styles.ratingText}>4.2</TextBase>
            <TextBase style={styles.reviewsText}>(455 Reviews)</TextBase>
          </View>

          <View style={styles.deliveryDetailsContainer}>
            <View style={styles.rowAndCenter}>
              <Image style={styles.deliveryDetailIcon} source={Images.DELIVERY_CHARGE} />
              <TextBase style={styles.deliveryDetailText}>Free Delivery</TextBase>
            </View>
            <View style={styles.rowAndCenter}>
              <Image style={styles.deliveryDetailIcon} source={Images.DELIVERY_TIME} />
              <TextBase style={styles.deliveryDetailText}>{restaurant?.time} min</TextBase>
            </View>
            <View style={styles.rowAndCenter}>
              <Image style={styles.deliveryDetailIcon} source={Images.MARKER} />
              <TextBase style={styles.deliveryDetailText}>
                {(restaurant?.distance || 0) / 1000}km
              </TextBase>
            </View>
            <View style={styles.restaurantType}>
              <TextBase style={styles.restaurantTypeText}>{restaurant?.type}</TextBase>
            </View>
          </View>

          <View style={styles.categoriesContainer}>
            <FlatList
              horizontal
              data={restaurant?.categories}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={() => <ListHeader />}
              ListFooterComponent={() => <ListFooter />}
              renderItem={({item}) => (
                <CategoryListItem
                  name={item}
                  isActive={item === selectedCategory}
                  selectCategory={(category) => setSelectedCategory(category)}
                />
              )}
            />
          </View>

          <View style={styles.foodList}>
            {restaurant?.foods
              ?.filter((food) => food?.category === selectedCategory)
              ?.map((item) => (
                <FoodCard
                  key={item?.id}
                  row={item}
                  // navigate={() => navigation.navigate('Food', {foodId: item?.id})}
                />
              ))}
            <Separator height={setHeight(2)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

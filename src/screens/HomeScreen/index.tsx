/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Separator} from 'src/components';
import {Colors, General} from 'src/constants';
import {scale} from 'src/utils';
import {CategoryMenuItem} from './components';
import {styles} from './styles';

const HomeScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} />
      <Separator safeTop />
      <View style={styles.backgroundCurvedContainer} />

      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={15} color={Colors.DEFAULT_WHITE} />
          <Text style={styles.locationText}>Delivered to</Text>
          <Text style={styles.selectedLocationText}>HOME</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color={Colors.DEFAULT_YELLOW} />
          <Feather
            size={24}
            name="bell"
            color={Colors.DEFAULT_WHITE}
            style={{position: 'absolute', right: 0}}
          />
          <View style={styles.alertBadge}>
            <Text style={styles.alertBadgeText}>12</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchSection}>
            <Ionicons name="search-outline" size={25} color={Colors.DEFAULT_GREY} />
            <Text style={styles.searchText}>Search...</Text>
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
    </View>
  );
};

export default HomeScreen;

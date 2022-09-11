import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {Colors, Images} from 'src/constants';
import {styles} from './styles';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} />
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />

      <Text style={styles.lineText}>FoodDelivery</Text>
    </View>
  );
};

export default SplashScreen;

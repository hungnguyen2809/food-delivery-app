import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {Colors, Images, SCREEN_NAME} from 'src/constants';
import {styles} from './styles';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREEN_NAME.WellcomeScreen);
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} />
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />

      <Text style={styles.lineText}>FoodDelivery</Text>
    </View>
  );
};

export default SplashScreen;

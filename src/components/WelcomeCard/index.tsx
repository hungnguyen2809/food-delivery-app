import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DeviceUtils} from 'src/utils';
import {Fonts, Images} from 'src/constants';

type WelcomeCardProps = {
  title: string;
  content: string;
  image: string;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={Images[image as keyof typeof Images]}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: DeviceUtils.width,
  },
  image: {
    width: DeviceUtils.setWidth(60),
    height: DeviceUtils.setHeight(30),
  },
  title: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: DeviceUtils.fontScale(22),
  },
  contentText: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: DeviceUtils.fontScale(18),
    marginHorizontal: DeviceUtils.scale(20),
  },
});

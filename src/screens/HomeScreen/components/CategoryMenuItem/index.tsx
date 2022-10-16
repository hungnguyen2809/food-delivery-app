/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, SetStateAction} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images} from 'src/constants';
import {fontScale, scale} from 'src/utils';

type Props = {
  name: string;
  logo: string;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
};

const CategoryMenuItem: React.FC<Props> = ({logo, name, activeCategory, setActiveCategory}) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveCategory(name)}
      style={[styles.category, {opacity: activeCategory === name ? 1 : 0.5}]}
    >
      <Image source={Images[logo as keyof typeof Images]} style={styles.categoryIcon} />
      <Text style={[styles.categoryText, {opacity: activeCategory === name ? 1 : 0.5}]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryMenuItem;

const styles = StyleSheet.create({
  category: {
    marginTop: 0,
    alignItems: 'center',
  },
  categoryIcon: {
    width: scale(30),
    height: scale(30),
  },
  categoryText: {
    marginTop: scale(5),
    fontSize: fontScale(12),
    lineHeight: fontScale(12) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
  },
});

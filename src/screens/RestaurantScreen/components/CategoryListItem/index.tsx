import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TextBase} from 'src/components';
import {Colors, Fonts} from 'src/constants';
import {fontScale, scale} from 'src/utils';

type Props = {
  name?: string;
  isActive?: boolean;
  selectCategory: Dispatch<SetStateAction<string | undefined>>;
};

const CategoryListItem: React.FC<Props> = ({name, isActive, selectCategory}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => selectCategory(name)}>
        <TextBase style={isActive ? styles.activeCategoryText : styles.inActiveCategoryText}>
          {name}
        </TextBase>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryListItem;

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    justifyContent: 'center',
    paddingHorizontal: scale(15),
    backgroundColor: Colors.LIGHT_YELLOW,
  },
  activeCategoryText: {
    fontSize: fontScale(13),
    lineHeight: fontScale(13) * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  inActiveCategoryText: {
    fontSize: fontScale(13),
    lineHeight: fontScale(13) * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.INACTIVE_GREY,
  },
});

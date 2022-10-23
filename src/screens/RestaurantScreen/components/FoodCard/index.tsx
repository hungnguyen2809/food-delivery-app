import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StaticImageApi, STATIC_IMAGE} from 'src/api';
import {TextBase} from 'src/components';
import {Colors, Fonts} from 'src/constants';
import {fontScale, scale, setWidth} from 'src/utils';

type Props = {
  row: Restaurent.FoodRow;
};

const FoodCard: React.FC<Props> = ({row}) => {
  const [itemCount, setItemCount] = useState(0);

  const removeFromCart = () => {
    setItemCount(itemCount - 1);
  };

  const addFromCart = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={styles.image}
          source={{
            uri: StaticImageApi.getGalleryImage(row.image || '', STATIC_IMAGE.SIZE.SQUARE),
          }}
        />
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <TouchableOpacity activeOpacity={0.8}>
          <TextBase numberOfLines={1} style={styles.titleText}>
            {row.name}
          </TextBase>
          <TextBase numberOfLines={2} style={styles.descriptionText}>
            {row.description}
          </TextBase>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <TextBase style={styles.priceText}>$ {row.price}</TextBase>
          <View style={styles.itemAddContainer}>
            {itemCount > 0 ? (
              <>
                <TouchableOpacity onPress={removeFromCart}>
                  <AntDesign size={18} name="minus" color={Colors.DEFAULT_YELLOW} />
                </TouchableOpacity>
                <TextBase style={styles.itemCountText}>{itemCount}</TextBase>
              </>
            ) : null}
            <TouchableOpacity onPress={addFromCart}>
              <AntDesign name="plus" color={Colors.DEFAULT_YELLOW} size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(5),
    borderRadius: 10,
    elevation: 2,
    backgroundColor: Colors.LIGHT_GREY,
  },
  image: {
    height: scale(100),
    width: scale(100),
    margin: scale(6),
    borderRadius: 8,
  },
  detailsContainer: {
    marginHorizontal: scale(5),
  },
  titleText: {
    width: setWidth(60),
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: fontScale(13),
    lineHeight: fontScale(13) * 1.4,
    marginBottom: scale(8),
  },
  descriptionText: {
    width: setWidth(60),
    color: Colors.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: fontScale(10),
    lineHeight: fontScale(10) * 1.4,
    marginBottom: scale(8),
  },
  priceText: {
    color: Colors.DEFAULT_YELLOW,
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: fontScale(14),
    lineHeight: fontScale(14) * 1.4,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scale(5),
  },
  itemAddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_GREY2,
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    borderRadius: 8,
  },
  itemCountText: {
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: fontScale(14),
    lineHeight: fontScale(14) * 1.4,
    marginHorizontal: scale(8),
  },
});

export default FoodCard;

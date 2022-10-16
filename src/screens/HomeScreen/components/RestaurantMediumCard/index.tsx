import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {StaticImageApi} from 'src/api';
import {TextBase} from 'src/components';
import {Colors, Fonts, Images} from 'src/constants';
import {fontScale, scale, setWidth} from 'src/utils';

type RestaurantMediumCardProps = {
  row: Restaurent.RestaurentRow;
};

const RestaurantMediumCard: React.FC<RestaurantMediumCardProps> = ({row}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: StaticImageApi.getLogo(row?.images?.logo)}}
          style={styles.posterStyle}
        />
      </View>
      <View style={styles.labelContainer}>
        <View style={styles.titleContainer}>
          <TextBase style={styles.titleText}>{row?.name}</TextBase>
          <View style={styles.rowAndCenter}>
            <TextBase style={styles.ratingText}>4.2</TextBase>
            <TextBase style={styles.reviewsText}>({233})</TextBase>
          </View>
        </View>
        <TextBase style={styles.tagsText} numberOfLines={2}>
          {row?.tags?.join(' • ')}
        </TextBase>
        <View style={styles.deliveryDetailsContainer}>
          <View style={styles.rowAndCenter}>
            <Image source={Images.DELIVERY_CHARGE} style={styles.deliveryDetailsIcon} />
            <TextBase style={styles.deliveryDetailsText}>Free Delivery</TextBase>
          </View>
          <View style={styles.rowAndCenter}>
            <Image source={Images.DELIVERY_TIME} style={styles.deliveryDetailsIcon} />
            <TextBase style={styles.deliveryDetailsText}>{row?.time} min</TextBase>
          </View>
          <View style={styles.rowAndCenter}>
            <Image style={styles.deliveryDetailsIcon} />
            <TextBase style={styles.deliveryDetailsText}>{row?.distance}</TextBase>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantMediumCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(15),
    elevation: 1,
    borderRadius: 8,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginTop: scale(8),
  },
  posterStyle: {
    width: setWidth(20),
    height: setWidth(20),
    borderRadius: 10,
    margin: scale(5),
  },
  labelContainer: {
    flex: 1,
    marginHorizontal: scale(8),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: fontScale(14),
    lineHeight: fontScale(14) * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
    marginBottom: scale(5),
  },
  tagsText: {
    fontSize: fontScale(11),
    lineHeight: fontScale(11) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_GREY,
    marginBottom: scale(7),
  },
  deliveryDetailsText: {
    marginLeft: 3,
    fontSize: fontScale(12),
    lineHeight: fontScale(12) * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailsIcon: {
    height: scale(16),
    width: scale(16),
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: scale(5),
    fontSize: fontScale(10),
    lineHeight: fontScale(10) * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    fontSize: fontScale(10),
    lineHeight: fontScale(10) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
  },
});

import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StaticImageApi} from 'src/api';
import {TextBase} from 'src/components';
import {Colors, Fonts} from 'src/constants';
import {fontScale, scale} from 'src/utils';

type RestaurentCardProps = {
  row: Restaurent.RestaurentRow;
};

const WIDTH_POSTER = 1920;
const HEIGHT_POSTER = 1080;

const RestaurentCard: React.FC<RestaurentCardProps> = ({row}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Ionicons
        // name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
        name="bookmark"
        color={Colors.DEFAULT_YELLOW}
        size={24}
        style={styles.bookmark}
      />
      <Image
        style={styles.posterStyle}
        source={{uri: StaticImageApi.getPoster(row?.images?.poster)}}
      />
      <TextBase style={styles.titleText}>{row?.name}</TextBase>
      <TextBase style={styles.tagText} numberOfLines={2}>
        {row?.tags?.join(' • ')}
      </TextBase>
      <View style={styles.footerContainer}>
        <View style={styles.rowAndCenter}>
          <FontAwesome name="star" size={14} color={Colors.DEFAULT_YELLOW} />
          <TextBase style={styles.ratingText}>4</TextBase>
          <TextBase style={styles.reviewsText}>({10})</TextBase>
        </View>
        <View style={styles.rowAndCenter}>
          <View style={styles.timeAndDistanceContainer}>
            <Ionicons name="location-outline" color={Colors.DEFAULT_YELLOW} size={15} />
            <TextBase style={styles.timeAndDistanceText}>{row?.distance}</TextBase>
          </View>
          <View style={styles.timeAndDistanceContainer}>
            <Ionicons name="ios-time-outline" color={Colors.DEFAULT_YELLOW} size={15} />
            <TextBase style={styles.timeAndDistanceText}>{row?.time}</TextBase>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurentCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 3,
    borderRadius: 10,
    marginBottom: scale(5),
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  posterStyle: {
    width: WIDTH_POSTER * 0.15,
    height: HEIGHT_POSTER * 0.15,
    borderRadius: 10,
    margin: scale(5),
  },
  titleText: {
    marginLeft: scale(8),
    fontSize: fontScale(15),
    lineHeight: fontScale(15) * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  tagText: {
    width: WIDTH_POSTER * 0.15,
    marginLeft: scale(8),
    fontSize: fontScale(11),
    lineHeight: fontScale(11) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_GREY,
    marginBottom: scale(5),
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(6),
    marginHorizontal: scale(8),
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeAndDistanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(5),
    paddingVertical: scale(3),
    backgroundColor: Colors.LIGHT_YELLOW,
    borderRadius: 12,
    marginHorizontal: scale(3),
  },
  timeAndDistanceText: {
    fontSize: scale(10),
    lineHeight: scale(10) * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_YELLOW,
  },
  ratingText: {
    marginLeft: scale(5),
    fontSize: scale(10),
    lineHeight: scale(10) * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    fontSize: scale(10),
    lineHeight: scale(10) * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  bookmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
});

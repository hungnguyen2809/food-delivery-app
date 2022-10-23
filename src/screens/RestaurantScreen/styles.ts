import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'src/constants';
import {fontScale, scale, setWidth} from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    top: 0,
    position: 'absolute',
    height: setWidth(100),
    width: setWidth(100),
  },
  mainContainer: {
    backgroundColor: Colors.SECONDARY_WHITE,
    borderTopLeftRadius: scale(32),
    borderTopRightRadius: scale(32),
  },
  titleContainer: {
    marginTop: scale(15),
    marginHorizontal: scale(25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontScale(23),
    lineHeight: fontScale(23) * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  tagText: {
    marginTop: scale(5),
    fontSize: fontScale(13),
    lineHeight: fontScale(13) * 1.4,
    marginHorizontal: scale(25),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_GREY,
  },
  ratingReviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(25),
    marginTop: scale(10),
  },
  ratingText: {
    marginLeft: scale(5),
    fontSize: fontScale(13),
    lineHeight: fontScale(13) * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    marginLeft: scale(5),
    fontSize: fontScale(13),
    lineHeight: fontScale(13) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  deliveryDetailText: {
    marginLeft: scale(3),
    fontSize: fontScale(12),
    lineHeight: fontScale(12) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailIcon: {
    height: scale(16),
    width: scale(16),
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantType: {
    backgroundColor: Colors.LIGHT_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: scale(3),
    borderRadius: 8,
  },
  restaurantTypeText: {
    fontSize: fontScale(12),
    lineHeight: fontScale(12) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_YELLOW,
  },
  categoriesContainer: {
    marginVertical: scale(20),
  },
  foodList: {
    marginHorizontal: scale(15),
  },
});

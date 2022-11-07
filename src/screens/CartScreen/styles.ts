import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'src/constants';
import {fontScale, scale, setHeight, setWidth} from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
  },
  headerTitle: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: fontScale(20),
    lineHeight: fontScale(20) * 1.4,
    width: setWidth(80),
  },
  foodList: {
    marginHorizontal: setWidth(4),
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: setWidth(4),
    paddingVertical: scale(15),
    marginTop: scale(10),
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
  },
  promoCodeText: {
    fontSize: scale(15),
    lineHeight: scale(15) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    marginLeft: scale(10),
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountContainer: {
    marginHorizontal: setWidth(4),
    paddingVertical: scale(20),
    borderBottomWidth: 0.5,
  },
  amountSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: scale(3),
  },
  amountLabelText: {
    fontSize: fontScale(15),
    lineHeight: fontScale(15) * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_GREEN,
  },
  amountText: {
    fontSize: fontScale(15),
    lineHeight: fontScale(15) * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  totalContainer: {
    marginHorizontal: setWidth(4),
    paddingVertical: scale(15),
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: fontScale(20),
    lineHeight: fontScale(20) * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  checkoutButton: {
    flexDirection: 'row',
    width: setWidth(80),
    height: setHeight(7),
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingHorizontal: scale(20),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: scale(20),
  },
  checkoutText: {
    fontSize: fontScale(16),
    lineHeight: fontScale(16) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    marginLeft: scale(8),
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: fontScale(30),
    lineHeight: fontScale(30) * 1.4,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: Colors.DEFAULT_GREEN,
  },
  emptyCartSubText: {
    fontSize: fontScale(12),
    lineHeight: fontScale(12) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.INACTIVE_GREY,
  },
  addButtonEmpty: {
    flexDirection: 'row',
    backgroundColor: Colors.DEFAULT_YELLOW,
    borderRadius: 8,
    paddingHorizontal: setWidth(4),
    paddingVertical: scale(5),
    marginTop: scale(10),
    justifyContent: 'space-evenly',
    elevation: 3,
    alignItems: 'center',
  },
  addButtonEmptyText: {
    fontSize: fontScale(12),
    lineHeight: fontScale(12) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    marginLeft: scale(10),
  },
  emptyCartImage: {
    height: setWidth(60),
    width: setWidth(60),
  },
});

import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'src/constants';
import {fontScale, scale} from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
  },
  backgroundCurvedContainer: {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: 2000,
    width: 2000,
    borderRadius: 2000,
    position: 'absolute',
    top: -1 * (2000 - 230),
    alignSelf: 'center',
    zIndex: -1,
  },
  headerContainer: {
    justifyContent: 'space-evenly',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(10),
    marginHorizontal: scale(20),
  },
  locationText: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: scale(5),
    fontSize: fontScale(15),
    lineHeight: fontScale(15) * 1.4,
  },
  selectedLocationText: {
    color: Colors.DEFAULT_YELLOW,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: scale(5),
    fontSize: fontScale(16),
    lineHeight: fontScale(16) * 1.4,
  },
  alertBadge: {
    backgroundColor: Colors.DEFAULT_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 32,
    height: 20,
    width: 20,
    right: -3,
    top: -13,
  },
  alertBadgeText: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: fontScale(13),
    lineHeight: fontScale(13) * 1.4,
  },
  searchContainer: {
    borderRadius: 8,
    height: scale(45),
    marginTop: scale(20),
    marginHorizontal: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(10),
  },
  searchText: {
    marginLeft: scale(10),
    fontSize: fontScale(16),
    lineHeight: fontScale(16) * 1.4,
    color: Colors.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  categoriesContainer: {
    marginTop: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

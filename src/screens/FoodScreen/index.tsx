import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {Image, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StaticImageApi, STATIC_IMAGE} from 'src/api';
import {useAppDispatch, useAppSelector} from 'src/app/hooks';
import {Separator, TextBase, ToastSnackbar} from 'src/components';
import {Colors, Images, SCREEN_NAME} from 'src/constants';
import {useParamsRoute} from 'src/hooks';
import {actionCartAdd, actionCartRemove} from 'src/redux/cart/actions';
import {selectorCartItems} from 'src/redux/cart/selectors';
import {actionFoodGetById} from 'src/redux/food/actions';
import {getMessageError, scale, setWidth} from 'src/utils';
import {styles} from './styles';

const setStyle = (isActive: boolean) =>
  isActive ? styles.subMenuButtonText : {...styles.subMenuButtonText, color: Colors.DEFAULT_GREY};

type ParamsFood = {foodId?: string};

const FoodScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const params = useParamsRoute<ParamsFood>(route);

  const cardItem = useAppSelector(selectorCartItems);
  const itemCount = useMemo(() => {
    if (params?.foodId && cardItem.length > 0) {
      return cardItem.find((item) => item.foodId === params.foodId)?.quantity;
    }
    return 0;
  }, [cardItem, params?.foodId]);

  const [food, setFood] = useState<Food.FoodInfo>();
  const [selectedSubMenu, setSelectedSubMenu] = useState<string>('Details');

  useEffect(() => {
    if (params?.foodId) {
      dispatch(actionFoodGetById({foodId: params?.foodId}))
        .unwrap()
        .then((data) => {
          setFood(data);
        })
        .catch((error) => {
          ToastSnackbar.open(getMessageError(error));
        });
    }
  }, [dispatch, params?.foodId]);

  const handleNavigateCart = () => {
    navigation.navigate(SCREEN_NAME.CartScreen);
  };

  const addToCart = async () => {
    if (!params?.foodId) {
      return;
    }
    try {
      await dispatch(actionCartAdd({foodId: params?.foodId})).unwrap();
    } catch (error) {
      ToastSnackbar.open(getMessageError(error));
    }
  };

  const removeFormCart = async () => {
    if (!params?.foodId) {
      return;
    }
    try {
      await dispatch(actionCartRemove({foodId: params?.foodId})).unwrap();
    } catch (error) {
      ToastSnackbar.open(getMessageError(error));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Image
        style={styles.image}
        source={{
          uri: StaticImageApi.getGalleryImage(food?.image || '', STATIC_IMAGE.SIZE.SQUARE),
        }}
      />

      <ScrollView>
        <View style={[styles.mainButtonBack, {top: insets.top}]}>
          <TouchableOpacity onPress={navigation.goBack} style={styles.containerButtonBack}>
            <Ionicons name="chevron-back-outline" size={scale(30)} />
          </TouchableOpacity>
        </View>

        <Separator height={setWidth(100)} />
        <View style={styles.mainContainer}>
          <View style={styles.titleHeaderContainer}>
            <TextBase style={styles.titleText}>{food?.name}</TextBase>
            <TextBase style={styles.priceText}>$ {food?.price}</TextBase>
          </View>

          <View style={styles.subHeaderContainer}>
            <View style={styles.rowAndCenter}>
              <FontAwesome name="star" size={20} color={Colors.DEFAULT_YELLOW} />
              <TextBase style={styles.ratingText}>4.2</TextBase>
              <TextBase style={styles.reviewsText}>(255)</TextBase>
            </View>
            <View style={styles.rowAndCenter}>
              <Image style={styles.iconImage} source={Images.DELIVERY_TIME} />
              <TextBase style={styles.deliveryText}>20 min</TextBase>
            </View>
            <View style={styles.rowAndCenter}>
              <Image style={styles.iconImage} source={Images.DELIVERY_CHARGE} />
              <TextBase style={styles.deliveryText}>Free Delivery</TextBase>
            </View>
          </View>

          <View style={styles.subMenuContainer}>
            <TouchableOpacity
              style={styles.subMenuButtonContainer}
              onPress={() => setSelectedSubMenu('Details')}
            >
              <TextBase style={setStyle(selectedSubMenu === 'Details')}>Details</TextBase>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subMenuButtonContainer}
              onPress={() => setSelectedSubMenu('Reviews')}
            >
              <TextBase style={setStyle(selectedSubMenu === 'Reviews')}>Reviews</TextBase>
            </TouchableOpacity>
          </View>

          <View style={styles.detailsContainer}>
            {food?.description ? (
              <>
                <TextBase style={styles.detailHeader}>Description</TextBase>
                <TextBase style={styles.detailContent}>{food?.description}</TextBase>
              </>
            ) : null}
            {food?.ingredients ? (
              <>
                <TextBase style={styles.detailHeader}>Ingredients</TextBase>
                <TextBase style={styles.detailContent}>{food?.ingredients}</TextBase>
              </>
            ) : null}
          </View>
        </View>
      </ScrollView>

      <View style={[styles.buttonsContainer, {paddingBottom: insets.bottom}]}>
        <View style={styles.itemAddContainer}>
          <AntDesign
            size={scale(18)}
            name="minus"
            color={Colors.DEFAULT_YELLOW}
            onPress={removeFormCart}
          />
          <TextBase style={styles.itemCountText}>{itemCount ? itemCount : 0}</TextBase>
          <AntDesign
            size={scale(18)}
            name="plus"
            color={Colors.DEFAULT_YELLOW}
            onPress={addToCart}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.cartButton}
          onPress={handleNavigateCart}
        >
          <TextBase style={styles.cartButtonText}>Go to Cart</TextBase>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodScreen;

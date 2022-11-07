import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppSelector} from 'src/app/hooks';
import {Separator, TextBase} from 'src/components';
import FoodCard from 'src/components/FoodCard';
import {Colors, Images} from 'src/constants';
import {selectorCartItems, selectorCartMeta} from 'src/redux/cart/selectors';
import {scale} from 'src/utils';
import {styles} from './styles';

const CartScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const cartItems = useAppSelector(selectorCartItems);
  const cartMeta = useAppSelector(selectorCartMeta);

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} />
      <Separator safeTop />

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="chevron-back-outline" size={30} />
        </TouchableOpacity>
        <TextBase style={styles.headerTitle}>My Cart</TextBase>
      </View>

      {cartItems.length > 0 ? (
        <ScrollView>
          <View style={styles.foodList}>
            {cartItems.map((item) => (
              <FoodCard key={item.food.id} row={item.food} />
            ))}
          </View>

          <View style={styles.promoCodeContainer}>
            <View style={styles.rowAndCenter}>
              <Entypo name="ticket" size={30} color={Colors.DEFAULT_YELLOW} />
              <TextBase style={styles.promoCodeText}>Add Promo Code</TextBase>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color={Colors.DEFAULT_BLACK} />
          </View>

          <View style={styles.amountContainer}>
            <View style={styles.amountSubContainer}>
              <TextBase style={styles.amountLabelText}>Item Total</TextBase>
              <TextBase style={styles.amountText}>$ {cartMeta?.itemsTotal?.toFixed(2)}</TextBase>
            </View>
            <View style={styles.amountSubContainer}>
              <TextBase style={styles.amountLabelText}>Discount</TextBase>
              <TextBase style={styles.amountText}>$ {cartMeta?.discount?.toFixed(2)}</TextBase>
            </View>
            <View style={styles.amountSubContainer}>
              <TextBase style={styles.amountLabelText}>Delivery Fee</TextBase>
              <TextBase style={{...styles.amountText, color: Colors.DEFAULT_GREEN}}>Free</TextBase>
            </View>
          </View>

          <View style={styles.totalContainer}>
            <TextBase style={styles.totalText}>Total</TextBase>
            <TextBase style={styles.totalText}>$ {cartMeta?.grandTotal?.toFixed(2)}</TextBase>
          </View>

          <TouchableOpacity style={styles.checkoutButton} activeOpacity={0.6}>
            <View style={styles.rowAndCenter}>
              <Ionicons name="cart-outline" color={Colors.DEFAULT_WHITE} size={20} />
              <TextBase style={styles.checkoutText}>Checkout</TextBase>
            </View>
            <TextBase style={styles.checkoutText}>$ {cartMeta?.grandTotal?.toFixed(2)}</TextBase>
          </TouchableOpacity>
          <Separator height={scale(100)} />
        </ScrollView>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Image style={styles.emptyCartImage} source={Images.EMPTY_CART} resizeMode="contain" />
          <TextBase style={styles.emptyCartText}>Cart Empty</TextBase>
          <TextBase style={styles.emptyCartSubText}>Go ahead and order some tasty food</TextBase>

          <TouchableOpacity style={styles.addButtonEmpty}>
            <AntDesign name="plus" color={Colors.DEFAULT_WHITE} size={20} />
            <TextBase style={styles.addButtonEmptyText}>Add Food</TextBase>
          </TouchableOpacity>
          <Separator height={scale(100)} />
        </View>
      )}
    </View>
  );
};

export default CartScreen;

import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StaticImageApi} from 'src/api';
import {CountryCode} from 'src/assets/data';
import {Separator, TextBase, TextInputBase} from 'src/components';
import {Colors, GlobalStyles} from 'src/constants';
import {DeviceUtils} from 'src/utils';
import FlagItem from './FlagItem';
import {styles} from './styles';

const getDropdownStyle = (y: number): ViewStyle => ({
  ...styles.countryDropdown,
  top: y + DeviceUtils.scale(60),
});

const RegisterPhoneScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<any>>();

  const [selectedCountry, setSelectedCountry] = useState(() => {
    return CountryCode.find((country) => country.code === 'VN');
  });
  const [openDropdown, setOpenDropdown] = useState(false);
  const [inputsContainerY, setInputsContainerY] = useState(0);

  const onClickCountry = (data: {name: string; dial_code: string | null; code: string}) => {
    setSelectedCountry(data);
    setOpenDropdown(false);
  };

  const closeDropdown = () => {
    if (openDropdown) {
      setOpenDropdown(false);
    }
  };

  return (
    <TouchableWithoutFeedback
      style={GlobalStyles.FLEX1}
      onPress={() => {
        closeDropdown();
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} />
        <Separator height={insets.top} />

        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={DeviceUtils.scale(30)}
            onPress={navigation.goBack}
          />
          <TextBase style={styles.headerTitle}>Register Phone</TextBase>
        </View>

        <TextBase style={styles.title}>Register Phone</TextBase>
        <TextBase style={styles.content}>Enter your registered phone number to login</TextBase>

        <View
          style={styles.inputsContainer}
          onLayout={({nativeEvent}) => {
            setInputsContainerY(nativeEvent.layout.y);
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setOpenDropdown(true);
              Keyboard.dismiss();
            }}
            style={styles.countryListContainer}
          >
            <Image
              style={styles.flagIcon}
              source={{uri: StaticImageApi.getFlagIcon(selectedCountry?.code)}}
            />
            <TextBase style={styles.countryCodeText}>{selectedCountry?.dial_code}</TextBase>
            <Ionicons name="chevron-down" />
          </TouchableOpacity>
          <View style={styles.phoneInputContainer}>
            <TextInputBase
              placeholder="Phone number..."
              keyboardType="number-pad"
              onFocus={closeDropdown}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.signinButton}>
          <TextBase style={styles.signinButtonText}>Continue</TextBase>
        </TouchableOpacity>

        {openDropdown && (
          <View style={getDropdownStyle(inputsContainerY)}>
            <FlatList
              data={CountryCode}
              keyExtractor={(item) => item.code}
              renderItem={({item}) => <FlagItem {...item} onPress={onClickCountry} />}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterPhoneScreen;

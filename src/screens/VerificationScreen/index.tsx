import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {StatusBar, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Separator, TextBase} from 'src/components';
import {Colors} from 'src/constants';
import {DeviceUtils} from 'src/utils';
import {styles} from './styles';

type ParamsRoute = {
  phone: string;
};

const VerificationScreen: React.FC = () => {
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<any>>();

  const params = useMemo(() => route.params, [route.params]) as Readonly<ParamsRoute | undefined>;

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} />
      <Separator height={insets.top} />

      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={DeviceUtils.scale(30)}
          onPress={navigation.goBack}
        />
        <TextBase style={styles.headerTitle}>OTP Verirication</TextBase>
      </View>

      <TextBase style={styles.title}>OTP Verirication</TextBase>
      <TextBase style={styles.content}>
        Enter the OTP number just send you at{' '}
        <TextBase style={styles.phoneNumberText}>{params?.phone}</TextBase>
      </TextBase>

      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput style={styles.otpTextInput} />
        </View>
        <View style={styles.otpBox}>
          <TextInput style={styles.otpTextInput} />
        </View>
        <View style={styles.otpBox}>
          <TextInput style={styles.otpTextInput} />
        </View>
        <View style={styles.otpBox}>
          <TextInput style={styles.otpTextInput} />
        </View>
      </View>
    </View>
  );
};

export default VerificationScreen;

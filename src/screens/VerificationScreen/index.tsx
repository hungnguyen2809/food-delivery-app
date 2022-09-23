import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useMemo, useRef, useState} from 'react';
import {StatusBar, TextInput, TouchableOpacity, View} from 'react-native';
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

  const firstInput = useRef<TextInput>(null);
  const secondInput = useRef<TextInput>(null);
  const thirdInput = useRef<TextInput>(null);
  const fourthInput = useRef<TextInput>(null);

  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

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
          <TextInput
            ref={firstInput}
            autoFocus
            maxLength={1}
            value={otp[1]}
            style={styles.otpTextInput}
            keyboardType="number-pad"
            onChangeText={(text) => {
              text && secondInput.current?.focus();
              setOtp({...otp, 1: text});
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            ref={secondInput}
            maxLength={1}
            value={otp[2]}
            style={styles.otpTextInput}
            keyboardType="number-pad"
            onChangeText={(text) => {
              text ? thirdInput.current?.focus() : firstInput.current?.focus();
              setOtp({...otp, 2: text});
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            ref={thirdInput}
            maxLength={1}
            value={otp[3]}
            style={styles.otpTextInput}
            keyboardType="number-pad"
            onChangeText={(text) => {
              text ? fourthInput.current?.focus() : secondInput.current?.focus();
              setOtp({...otp, 3: text});
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            ref={fourthInput}
            maxLength={1}
            value={otp[4]}
            style={styles.otpTextInput}
            keyboardType="number-pad"
            onChangeText={(text) => {
              !text && thirdInput.current?.focus();
              setOtp({...otp, 4: text});
            }}
          />
        </View>
      </View>

      <TextBase style={styles.resendCodeContainer}>
        Didn't receive SMS? <TextBase style={styles.resendCodeText}>Resend Code</TextBase>
      </TextBase>

      <TouchableOpacity style={styles.signinButton}>
        <TextBase style={styles.signinButtonText}>Verify</TextBase>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

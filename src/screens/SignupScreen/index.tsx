import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StatusBar, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Separator, TextBase, TextInputBase} from 'src/components';
import {Colors, Images} from 'src/constants';
import {DeviceUtils} from 'src/utils';
import {styles} from './styles';

const SignUpScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<any>>();

  const [showPass, setShowPass] = useState<boolean>(false);

  const onToggleShowPass = () => {
    setShowPass(!showPass);
  };

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
        <TextBase style={styles.headerTitle}>Sign Up</TextBase>
      </View>

      <TextBase style={styles.title}>Create Account</TextBase>
      <TextBase style={styles.content}>Enter your email, choose username and password</TextBase>

      <TextInputBase
        placeholder="Username"
        iconLeft={
          <Feather
            name="user"
            color={Colors.DEFAULT_GREY}
            size={DeviceUtils.scale(22)}
            style={{marginRight: DeviceUtils.scale(10)}}
          />
        }
      />
      <Separator height={DeviceUtils.scale(15)} />

      <TextInputBase
        placeholder="Email"
        iconLeft={
          <Feather
            name="mail"
            color={Colors.DEFAULT_GREY}
            size={DeviceUtils.scale(22)}
            style={{marginRight: DeviceUtils.scale(10)}}
          />
        }
      />
      <Separator height={DeviceUtils.scale(15)} />

      <TextInputBase
        placeholder="Password"
        secureTextEntry={!showPass}
        iconLeft={
          <Feather
            name="lock"
            color={Colors.DEFAULT_GREY}
            size={DeviceUtils.scale(22)}
            style={{marginRight: DeviceUtils.scale(10)}}
          />
        }
        iconRight={
          <Feather
            name={showPass ? 'eye-off' : 'eye'}
            onPress={onToggleShowPass}
            color={Colors.DEFAULT_GREY}
            size={DeviceUtils.scale(22)}
            style={{marginRight: DeviceUtils.scale(10)}}
          />
        }
      />

      <TouchableOpacity style={styles.signinButton}>
        <TextBase style={styles.signinButtonText}>Create Account</TextBase>
      </TouchableOpacity>

      <TextBase style={styles.orText}>OR</TextBase>

      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
          </View>
          <TextBase style={styles.socialSigninButtonText}>Connect with Facebook</TextBase>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
          </View>
          <TextBase style={styles.socialSigninButtonText}>Connect with Google</TextBase>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

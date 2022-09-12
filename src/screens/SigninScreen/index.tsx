import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Separator} from 'src/components';
import {Colors} from 'src/constants';
import {DeviceUtils} from 'src/utils';
import {styles} from './styles';

const SigninScreen: React.FC = () => {
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
        <Text style={styles.headerTitle}>Sign in</Text>
      </View>

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>Enter your username and password, and enjoy ordering food</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            color={Colors.DEFAULT_GREY}
            size={DeviceUtils.scale(22)}
            style={{marginRight: DeviceUtils.scale(10)}}
          />
          <TextInput
            placeholder="Username"
            style={styles.inputText}
            selectionColor={Colors.DEFAULT_GREY}
            placeholderTextColor={Colors.DEFAULT_GREY}
          />
        </View>
      </View>
      <Separator height={DeviceUtils.scale(15)} />

      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            color={Colors.DEFAULT_GREY}
            size={DeviceUtils.scale(22)}
            style={{marginRight: DeviceUtils.scale(10)}}
          />
          <TextInput
            secureTextEntry={!showPass}
            placeholder="Password"
            style={styles.inputText}
            selectionColor={Colors.DEFAULT_GREY}
            placeholderTextColor={Colors.DEFAULT_GREY}
          />
          <Feather
            name={showPass ? 'eye-off' : 'eye'}
            onPress={onToggleShowPass}
            color={Colors.DEFAULT_GREY}
            size={DeviceUtils.scale(22)}
            style={{marginRight: DeviceUtils.scale(10)}}
          />
        </View>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.rememberMeText}>Remember me</Text>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </View>

      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text style={styles.signupText}>Sign Up</Text>
      </View>
      <Text>OR</Text>

      <TouchableOpacity>
        <View>
          <View>
            <Image />
          </View>
          <Text>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View>
            <Image />
          </View>
          <Text>Connect with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

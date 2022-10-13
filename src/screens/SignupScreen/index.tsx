import {yupResolver} from '@hookform/resolvers/yup';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Image, Keyboard, StatusBar, TouchableOpacity, View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppDispatch} from 'src/app/hooks';
import {Separator, TextBase, TextInputBase} from 'src/components';
import {Colors, Images} from 'src/constants';
import {actionAuthRegister} from 'src/redux/auth/actions';
import {DeviceUtils, getMessageError} from 'src/utils';
import * as yup from 'yup';
import {styles} from './styles';

interface FormRegister {
  username: string;
  email: string;
  password: string;
}

const schame = yup.object().shape({
  username: yup.string().required('Please enter username'),
  email: yup.string().required('Please enter username').email('Email in corect'),
  password: yup.string().required('Please enter username').min(6, 'Password more 6 characters'),
});

const SignUpScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<any>>();

  const {control, handleSubmit} = useForm<FormRegister>({
    resolver: yupResolver(schame),
    defaultValues: {username: '', email: '', password: ''},
  });

  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState({visible: false, message: ''});

  const onToggleShowPass = () => {
    setShowPass(!showPass);
  };

  const onDismissSnackbar = () => {
    setSnackbar({visible: false, message: ''});
  };

  // const onNavigateRegisterScreen = () => {
  //   navigation.navigate(SCREEN_NAME.RegisterPhoneScreen);
  // };

  const handleSubmitRegister = async (dataForm: FormRegister) => {
    Keyboard.dismiss();
    try {
      setLoading(true);
      await dispatch(actionAuthRegister(dataForm)).unwrap();
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      setSnackbar({visible: true, message: getMessageError(error)});
    }
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

      <View style={styles.inputsContainer}>
        <Controller
          control={control}
          name="username"
          render={({field, fieldState: {error}}) => (
            <TextInputBase
              ref={field.ref}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorText={error?.message}
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
          )}
        />
        <Separator height={DeviceUtils.scale(15)} />

        <Controller
          control={control}
          name="email"
          render={({field, fieldState: {error}}) => (
            <TextInputBase
              ref={field.ref}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorText={error?.message}
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
          )}
        />
        <Separator height={DeviceUtils.scale(15)} />

        <Controller
          control={control}
          name="password"
          render={({field, fieldState: {error}}) => (
            <TextInputBase
              ref={field.ref}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorText={error?.message}
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
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.signinButton}
        // onPress={onNavigateRegisterScreen}
        onPress={handleSubmit(handleSubmitRegister)}
      >
        {loading ? (
          <LottieView source={Images.LOADING} autoPlay loop />
        ) : (
          <TextBase style={styles.signinButtonText}>Create Account</TextBase>
        )}
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

      <Snackbar duration={3000} visible={snackbar.visible} onDismiss={onDismissSnackbar}>
        {snackbar.message}
      </Snackbar>
    </View>
  );
};

export default SignUpScreen;

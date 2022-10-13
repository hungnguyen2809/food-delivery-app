import {yupResolver} from '@hookform/resolvers/yup';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {Image, StatusBar, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Separator, TextBase, TextInputBase} from 'src/components';
import {Colors, Images, SCREEN_NAME} from 'src/constants';
import {DeviceUtils} from 'src/utils';
import {styles} from './styles';
import {useAppDispatch} from 'src/app/hooks';
import {actionAuthRegister} from 'src/redux/auth/actions';

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

  const onToggleShowPass = () => {
    setShowPass(!showPass);
  };

  const onNavigateRegisterScreen = () => {
    navigation.navigate(SCREEN_NAME.RegisterPhoneScreen);
  };

  const handleSubmitRegister = async (dataForm: FormRegister) => {
    try {
      await dispatch(actionAuthRegister(dataForm)).unwrap();
    } catch (error) {
      //
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

import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Separator, TextBase, TextInputBase} from 'src/components';
import {Colors} from 'src/constants';
import {DeviceUtils} from 'src/utils';
import {styles} from './styles';

const ForgotPasswordScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<any>>();

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
        <TextBase style={styles.headerTitle}>Forgot Password</TextBase>
      </View>

      <TextBase style={styles.title}>Forgot Password</TextBase>
      <TextBase style={styles.content}>
        Enter your email, so that we can help you to recover your password
      </TextBase>

      <View style={styles.inputsContainer}>
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
      </View>

      <TouchableOpacity style={styles.signinButton}>
        <TextBase style={styles.signinButtonText}>Reset Password</TextBase>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;

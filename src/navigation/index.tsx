import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'src/app/hooks';
import {actionAuthSetUserInfo} from 'src/redux/auth/actions';
import {selectorAuthToken} from 'src/redux/auth/selectors';
import {SplashScreen} from 'src/screens';
import {getDataStorage, STORAGE_KEY} from 'src/utils';
import MainStack from './MainStack';
import OnboardingStack from './OnboardingStack';

const MainNavigation: React.FC = () => {
  const token = useAppSelector(selectorAuthToken);
  return token ? <MainStack /> : <OnboardingStack />;
};

const AppNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showSplash, setShowSplash] = useState(true);

  const onReady = useCallback(async () => {
    const userInfo = await getDataStorage<Auth.UserInfo>(STORAGE_KEY.USER_INFO);
    if (userInfo && userInfo.token) {
      dispatch(actionAuthSetUserInfo(userInfo));
    }

    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;

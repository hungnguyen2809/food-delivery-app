import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useAppDispatch} from 'src/app/hooks';
import {actionAuthLogout} from 'src/redux/auth/actions';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(actionAuthLogout());
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <Button mode="contained" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

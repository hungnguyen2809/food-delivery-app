import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Separator} from 'src/components';
import {Colors} from 'src/constants';
import {styles} from './styles';

const HomeScreen: React.FC = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} />
      <Separator height={inset.top} />

      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={15} color={Colors.DEFAULT_WHITE} />
          <Text></Text>
          <Text></Text>
          <MaterialIcons />
          <Feather />
          <View>
            <Text></Text>
          </View>
        </View>
      </View>

      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

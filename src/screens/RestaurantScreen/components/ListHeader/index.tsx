/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Colors} from 'src/constants';
import {scale} from 'src/utils';

const ListHeader: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        width: scale(40),
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}
    >
      <View
        style={{
          width: scale(20),
          borderTopLeftRadius: 64,
          borderBottomLeftRadius: 64,
          backgroundColor: Colors.LIGHT_YELLOW,
        }}
      />
    </View>
  );
};

export default ListHeader;

import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {StaticImageApi} from 'src/api';
import {TextBase} from 'src/components';
import {Colors, Fonts} from 'src/constants';
import {DeviceUtils} from 'src/utils';

type FlagItemProps = {
  code: string;
  name: string;
  dial_code: string | null;
  onPress?: (data: {code: string; name: string; dial_code: string | null}) => void;
};

const FlagItem: React.FC<FlagItemProps> = ({code, name, dial_code, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress?.({code, name, dial_code})}>
      <Image style={styles.flagImage} source={{uri: StaticImageApi.getFlagIcon(code)}} />
      <TextBase style={styles.flagText}>{dial_code}</TextBase>
      <TextBase style={styles.flagText}>{name}</TextBase>
    </TouchableOpacity>
  );
};

export default FlagItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: DeviceUtils.scale(10),
  },
  flagImage: {
    width: DeviceUtils.scale(20),
    height: DeviceUtils.scale(15),
    marginRight: DeviceUtils.scale(10),
  },
  flagText: {
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: DeviceUtils.scale(14),
    marginRight: DeviceUtils.scale(10),
    lineHeight: DeviceUtils.scale(14) * 1.4,
  },
});

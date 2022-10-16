import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface SeparatorProps extends ViewStyle {
  height?: number;
  width?: number;
  safeTop?: boolean;
}

const Separator: React.FC<SeparatorProps> = ({height, width, safeTop, ...extraProps}) => {
  const inset = useSafeAreaInsets();
  return <View style={{height: safeTop ? inset.top : height, width, ...extraProps}} />;
};

Separator.defaultProps = {
  height: 0,
  width: 0,
};

export default Separator;

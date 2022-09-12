import React from 'react';
import {View, ViewStyle} from 'react-native';

interface SeparatorProps extends ViewStyle {
  height?: number;
  width?: number;
}

const Separator: React.FC<SeparatorProps> = ({height, width, ...extraProps}) => (
  <View style={{height, width, ...extraProps}} />
);

Separator.defaultProps = {
  height: 0,
  width: 0,
};

export default Separator;

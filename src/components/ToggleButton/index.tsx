import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, TouchableOpacity} from 'react-native';
import {Colors} from 'src/constants';
import {DeviceUtils} from 'src/utils';

type ToggleButtonProps = {
  size: number;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
};

const containerStyle = (size: number, isActive: boolean) => ({
  backgroundColor: isActive ? Colors.DEFAULT_GREEN : Colors.DEFAULT_GREY,
  height: DeviceUtils.scale(32) * size,
  width: DeviceUtils.scale(64) * size,
  borderRadius: DeviceUtils.scale(32),
  padding: DeviceUtils.scale(3.5) * size,
});

const toggleStyle = (size: number, animatedValue: Animated.Value) => ({
  height: DeviceUtils.scale(24) * size,
  width: DeviceUtils.scale(24) * size,
  borderRadius: DeviceUtils.scale(32),
  backgroundColor: Colors.DEFAULT_WHITE,
  transform: [
    {
      translateX: animatedValue,
    },
  ],
});

const ToggleButton: React.FC<ToggleButtonProps> = ({size, value, onValueChange}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (typeof value !== 'undefined') {
      const active = value ? value : false;
      setIsActive(active);

      Animated.timing(animatedValue, {
        toValue: !active ? 0 : DeviceUtils.scale(32) * size,
        delay: 0,
        duration: 250,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    }
  }, [value, size, animatedValue]);

  const toggleValue = () => {
    Animated.timing(animatedValue, {
      toValue: isActive ? 0 : DeviceUtils.scale(32) * size,
      delay: 0,
      duration: 250,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();

    setIsActive(!isActive);
    onValueChange?.(!isActive);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={containerStyle(size, isActive)}
      onPress={toggleValue}
    >
      <Animated.View style={toggleStyle(size, animatedValue)} />
    </TouchableOpacity>
  );
};

export default ToggleButton;

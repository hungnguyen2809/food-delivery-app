import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import {Colors, Fonts} from 'src/constants';
import {DeviceUtils} from 'src/utils';
import TextError from '../TextError';

interface TextInputBaseProps extends TextInputProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  wrapStyle?: ViewStyle;
  errorText?: string;
}

const TextInputBase: React.ForwardRefRenderFunction<TextInput, TextInputBaseProps> = (
  {iconLeft, iconRight, errorText, style, wrapStyle, ...restProps},
  ref,
) => {
  return (
    <View style={[styles.container, wrapStyle]}>
      <View style={[styles.inputContainer, errorText ? styles.errorField : {}]}>
        <View style={styles.inputSubContainer}>
          {iconLeft && iconLeft}
          <TextInput
            ref={ref}
            style={[styles.inputText, style]}
            selectionColor={Colors.DEFAULT_GREY}
            placeholderTextColor={Colors.DEFAULT_GREY}
            {...restProps}
          />
          {iconRight && iconRight}
        </View>
      </View>

      {errorText && (
        <View style={styles.wrapTextError}>
          <TextError message={errorText} />
        </View>
      )}
    </View>
  );
};

export default forwardRef(TextInputBase);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderColor: Colors.LIGHT_GREY2,
    backgroundColor: Colors.LIGHT_GREY,
    paddingVertical: DeviceUtils.scale(10),
    paddingHorizontal: DeviceUtils.scale(20),
    marginHorizontal: DeviceUtils.scale(20),
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    margin: 0,
    padding: 0,
    textAlignVertical: 'center',
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: DeviceUtils.fontScale(16),
    height: DeviceUtils.scale(25),
  },
  errorField: {
    borderColor: Colors.DEFAULT_RED,
  },
  wrapTextError: {
    marginTop: DeviceUtils.scale(3),
    marginHorizontal: DeviceUtils.scale(25),
  },
});

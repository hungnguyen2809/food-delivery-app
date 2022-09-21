import React, {forwardRef} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {Colors, Fonts, FontSize} from 'src/constants';

export interface TextBaseProps extends TextProps {
  children: React.ReactNode;
}

const TextBase: React.ForwardRefRenderFunction<Text, TextBaseProps> = (
  {children, style, ...restProps},
  ref,
) => {
  return (
    <Text ref={ref} style={[styles.text, style]} allowFontScaling={false} {...restProps}>
      {children}
    </Text>
  );
};

export default forwardRef(TextBase);

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.DEFAULT,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: FontSize.DEFAULT * 1.4,
  },
});

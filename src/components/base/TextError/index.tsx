import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'src/constants';
import TextBase from '../TextBase';

type TextErrorProp = {
  message?: string;
};

const TextError: React.FC<TextErrorProp> = ({message}) => {
  return message ? <TextBase style={styles.text}>{message}</TextBase> : <></>;
};

export default TextError;

const styles = StyleSheet.create({
  text: {
    color: Colors.SECONDARY_RED,
  },
});

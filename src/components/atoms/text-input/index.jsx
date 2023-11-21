// TextInput.js
import { TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, FONT } from '../../../constants/style.contstants';

const styles = StyleSheet.create({
  input: {
    ...FONT.default,
    borderBottomColor: COLORS.text,
    borderBottomWidth: 1,
    color: COLORS.text,
    marginVertical: 24,
    padding: 12,
    paddingBottom: 6,
  },
});

const CustomTextInput = ({ style, placeholder, onChangeText, value, placeholderTextColor }) => (
  <TextInput
    style={[styles.input, style]}
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    placeholderTextColor={placeholderTextColor}
  />
);

export default CustomTextInput;
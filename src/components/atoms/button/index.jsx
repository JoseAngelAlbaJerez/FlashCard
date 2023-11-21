// Button.js
import { Button as RNButton } from '@rneui/base';
import React from 'react';
import { COLORS, FONT, COMPONENT } from '../../../constants/style.contstants';

const CustomButton = ({ title, onPress, disabled, buttonStyle, titleStyle }) => (
  <RNButton
    title={title}
    onPress={onPress}
    disabled={disabled}
    buttonStyle={[COMPONENT.button.default, buttonStyle]}
    titleStyle={[FONT.button, titleStyle]}
  />
);

export default CustomButton;
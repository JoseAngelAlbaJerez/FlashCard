// FABButton.js
import { FAB } from '@rneui/base';
import React from 'react';

const FABButton = ({ icon, color, onPress, size }) => (
  <FAB icon={{ name: icon, color }} color={color} onPress={onPress} size={size} />
);

export default FABButton;
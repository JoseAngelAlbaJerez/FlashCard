// Overlay.js
import { Overlay } from '@rneui/base';
import React from 'react';

const CustomOverlay = ({ isVisible, onBackdropPress, overlayStyle, children }) => (
  <Overlay isVisible={isVisible} onBackdropPress={onBackdropPress} overlayStyle={overlayStyle}>
    {children}
  </Overlay>
);

export default CustomOverlay;
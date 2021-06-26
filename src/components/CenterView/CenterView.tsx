import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './style';

export default function CenterView({children, customStyles}: any) {
  return <View style={[styles.main, customStyles]}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
  customStyles: PropTypes.object,
};

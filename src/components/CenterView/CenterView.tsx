import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import styles from './style';

export default function CenterView({children, customStyles}: any) {
  return <ScrollView contentContainerStyle={[styles.main, customStyles]}>{children}</ScrollView>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
  customStyles: PropTypes.object,
};

/* eslint-disable react-native/no-inline-styles */
import React, { EventHandler, ReactEventHandler, useState } from 'react';
import { } from 'react-native';
import Text from '../../config/AppText';
import { Input } from '@ui-kitten/components';
import styles from './InputStyle';
import { fontMedium } from '../../theme/fonts';
import { RenderProp } from '@ui-kitten/components/devsupport';

interface Props {
  onPress?: () => void,
  placeholder?: string,
  label?: string,
  caption?: string,
  footer?: RenderProp,
  isSecure?: boolean,
  hasIcon?: boolean,
  children?: JSX.Element | JSX.Element[],
  onChangeText: (event: any) => void,
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined
}

function CustomInput(props: Props) {
  const { placeholder, label, footer, caption, isSecure, autoCapitalize } = props;

  const renderCaption = () => {
    return (
      <Text style={{ fontSize: 12, fontWeight: '400', color: '#8F9BB3' }}>
        {caption}
      </Text>
    );
  };

  return (
    <>
      <Input
        style={styles.input}
        size="large"
        label={label}
        caption={renderCaption}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        autoCapitalize={autoCapitalize}
        onChangeText={(e: any) => props?.onChangeText(e)}
      />
    </>
  );
}

export default CustomInput;
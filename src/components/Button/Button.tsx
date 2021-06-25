import React, { ReactElement } from 'react';
import { View } from 'react-native';
import Text from '../../config/AppText';
import { Button, Spinner } from '@ui-kitten/components';
import styles from './ButtonStyle';
import { fontMedium } from '../../theme/fonts';

interface Props {
  onPress?: () => void;
  btnStyles?: any;
  btnText?: String;
  Icon?: JSX.Element;
  btnTextStyle?: object;
  size?: string;
  loading?: boolean;
}

function CustomButton(props: Props) {
  const { 
    btnText, 
    btnStyles, 
    onPress, 
    Icon, 
    btnTextStyle, 
    size, 
    loading 
  } = props;

  const LoadingIndicator = (props: any) => {
    const spinner = <View style={[props.style, styles.indicator]}>
      <Spinner size='small' status='basic' />
    </View>;
    return <View>{loading && spinner}</View>
  };

  return (
    <Button
      onPress={onPress}
      size={size}
      style={[styles.btn, btnStyles]}
      accessoryLeft={LoadingIndicator}
      disabled={loading}
      activeOpacity={loading ? 0.3 : 1}

    >
      {(evaProps: any) => (
        <>
          {!loading && <Text
            {...evaProps}
            style={[fontMedium, btnTextStyle || styles.btnTextDefault]}>
            {btnText}
          </Text>}
        </>
      )}
    </Button>
  );
}

export default CustomButton;

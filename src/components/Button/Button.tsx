import React, { ReactElement } from 'react';
import { View, Pressable } from 'react-native';
import Text from '../../config/AppText';
// import { Button, Spinner } from '@ui-kitten/components';
import { Button } from 'native-base';
import styles from './ButtonStyle';

interface Props {
  onPress?: () => void;
  btnStyles?: any;
  btnText?: String;
  Icon?: JSX.Element;
  btnTextStyle?: object;
  size?: "xs" | "sm" | "md" | "lg";
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

  // const LoadingIndicator = (props: any) => {
  //   const spinner = <View style={[props.style, styles.indicator]}>
  //     <Spinner size='small' status='basic' />
  //   </View>;
  //   return <View>{loading && spinner}</View>
  // };

  return (
    // <Button
    //   onPress={onPress}
    //   size={size}
    //   style={[styles.btn, btnStyles]}
    //   accessoryLeft={LoadingIndicator}
    //   disabled={loading}
    //   activeOpacity={loading ? 0.3 : 1}
    // >
    //   {(evaProps: any) => (
    //     <>
    //       {!loading && <Text
    //         {...evaProps}
    //         style={[btnTextStyle || styles.btnTextDefault]}>
    //         {btnText}
    //       </Text>}
    //     </>
    //   )}
    // </Button>
    <Pressable
      style={[styles.button, btnStyles]}
      onPress={onPress}
    >
      <Text style={styles.text}>{btnText}</Text>
    </Pressable>
  );
}

export default CustomButton;

import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Card } from '@ui-kitten/components';
import styles from './CardStyle';
import { RenderProp } from '@ui-kitten/components/devsupport';

interface Props {
    onPress?: () => void,
    Header?: RenderProp,
    Footer?: RenderProp,
    children?: JSX.Element | JSX.Element[] | boolean;
    customStyles?: any
}

function CustomCard(props: Props) {
    const {
        Header,
        Footer,
        customStyles
    } = props;

    return <>
        {/* <Card
            style={[styles.card, customStyles]}
            header={Header}
            footer={Footer}
        >
            {props?.children}
        </Card> */}
        <View style={[styles.card, customStyles]}>
            {props?.children}
        </View>
    </>
}

export default CustomCard;
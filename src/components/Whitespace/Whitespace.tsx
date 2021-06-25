import React from 'react';
import {
    View
} from 'react-native';

interface Props {
    size?: "sm" | undefined
}

function Whitespace(props: Props) {
    return <>
        <View style={{ height: props?.size === "sm" ? 10 : 20 }} />
    </>
}

export default Whitespace;
import { StyleSheet, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    pressable: {
        alignItems: 'center',
    },
    iconPreview: {
        opacity: 0.6,
        textAlign: 'center',
    },
    updatedImg: {
        width: '90%',
        height: (height * 0.5),
        resizeMode: 'contain',
    },
})
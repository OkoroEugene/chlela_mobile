import { StyleSheet, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    imgPreview: {
        width: '90%',
        height: (height * 0.5),
        resizeMode: 'cover',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    btnUpload: {
        backgroundColor: '#0277FE',
    },
    btnRemove: {
        backgroundColor: '#D3534B',
    },
})
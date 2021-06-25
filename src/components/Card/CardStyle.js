import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card__: {
        // flex: 1,
        // margin: 2,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            height: 2,
            width: 0
        },
        borderRadius: 10
    },
    card: {
        width:'100%',
        padding: 15,
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10
    },
})
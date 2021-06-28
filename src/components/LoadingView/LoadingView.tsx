import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function LoadingView() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="small" color="#0277FE" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: 50,
        borderRadius: 10,
        backgroundColor: "#E5E5E5",
        justifyContent: "center",
        alignItems: "center",
    }
});
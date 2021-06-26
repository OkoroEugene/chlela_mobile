import React from 'react';
import { Alert } from 'react-native';
import { View, SafeAreaView } from 'react-native';
import Button from '../../components/Button/Button';

const Splash = () => {
    return (
        <SafeAreaView>
            <Button
                btnText="Test Button"
            />
        </SafeAreaView>
    );
};

export default Splash;
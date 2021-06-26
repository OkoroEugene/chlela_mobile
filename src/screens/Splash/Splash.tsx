import React from 'react';
import { Alert } from 'react-native';
import { View, Image } from 'react-native';
import Button from '../../components/Button/Button';
import CenterView from '../../components/CenterView/CenterView';

const Splash = ({ navigation }: any) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 2000);
    }, [])

    return (
        <CenterView customStyles={{backgroundColor:'black'}}>
            <Image
                source={require('../../assets/logo.png')}
                style={{width:200, height:200}}
            />
        </CenterView>
    );
};

export default Splash;
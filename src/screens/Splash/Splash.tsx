import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import CenterView from '../../components/CenterView/CenterView';

const Splash = ({ navigation }: any) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    { name: 'Home' },
                  ],
                })
              );
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
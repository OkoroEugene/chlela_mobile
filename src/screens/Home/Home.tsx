import React, { useState } from 'react';
import { bindActionCreators, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Alert, Pressable } from 'react-native';
import { View, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button/Button';
import CenterView from '../../components/CenterView/CenterView';
import { createImage } from '../../actions/file/CreateImage';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../../config/AppText';
import Whitespace from '../../components/Whitespace/Whitespace';

function Home(props: IHome) {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<IFile>({
        uri: "",
        type: "",
        name: "",
        path: "",
    });

    const openPicker = () => {
        setFile({uri:'../../assets/logo.png'})
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        })
            .then(image => {
                Alert.alert("image");
                // const { sourceURL, path, filename, mime } = image;
                // setFile({
                //     uri: sourceURL,
                //     path,
                //     name: filename,
                //     type: mime
                // });
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = async () => {
        setLoading(true);
        const { createImage } = props;
        const payload: IFile = {
            uri: 'https://images.pexels.com/photos/8369440/pexels-photo-8369440.jpeg',
            name: 'pexels-photo-8369440',
            type: 'image/jpeg',
        }

        await createImage(payload);
    }

    return (
        <>
            <CenterView>
                {file.uri ? <>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 200, height: 200, resizeMode: 'cover' }}
                    />
                    <Whitespace />
                    <Button
                        btnText="Upload"
                        onPress={handleSubmit}
                        btnStyles={{ backgroundColor: '#0277FE' }}
                        loading={loading}
                    />
                </> : <Pressable style={{ alignItems: 'center' }} onPress={openPicker}>
                    <Icon name="cloud-upload-outline" size={60} style={{ opacity: 0.3 }} />
                    <View style={{ width: '65%', }}>
                        <Text style={{ opacity: 0.6, textAlign: 'center' }}>Select an image file and then click on the upload button</Text>
                    </View>
                </Pressable>}
            </CenterView>
        </>
    );
}

interface IHome {
    file: any,
    createImage: (payload: IFile) => void,
}

interface IFile {
    uri?: string,
    type?: string,
    name?: string,
    path?: string,
}

const mapStateToProps = (state: any) => ({
    file: state.file,
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ createImage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
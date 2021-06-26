import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button/Button';
import CenterView from '../../components/CenterView/CenterView';

function Home() {
    const [file, setFile] = useState<IFile>({
        uri: "",
        type: "",
        name: "",
        path: "",
    });

    const openPicker = () => {
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

    return (
        <CenterView>
            {/* {<Image
                source={{ uri: file?.uri }}
            />} */}
            <Button
                btnText="Open Gallery"
                onPress={openPicker}
                btnStyles={{ backgroundColor: '#0277FE' }}
            />
        </CenterView>
    );
}

interface IFile {
    uri?: string,
    type?: string,
    name?: string,
    path?: string,
}

export default Home;
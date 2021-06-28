import React, { useState } from 'react';
import { bindActionCreators, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Pressable, Dimensions, } from 'react-native';
import { View, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button/Button';
import CenterView from '../../components/CenterView/CenterView';
import { createImage } from '../../actions/file/CreateImage';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../../config/AppText';
import Whitespace from '../../components/Whitespace/Whitespace';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import Config from 'react-native-config';

const { width, height } = Dimensions.get("screen");

function Home(props: IHome) {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<IFile>({
        uri: "",
        type: "",
        name: "",
        path: "",
    });
    const [updatedImg, setUpdatedImg] = useState(null);

    const openPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        })
            .then(image => {
                const { sourceURL, path, filename, mime } = image;
                setFile({
                    uri: sourceURL,
                    path,
                    name: filename,
                    type: mime,
                });
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = async () => {
        setLoading(true);
        const { createImage } = props;
        const payload: IFile = {
            uri: file.uri,
            name: file.name,
            type: file.type,
        }

        await createImage(payload);
    }

    useEffect(() => {
        if (typeof props.file.error === 'string') {
            Alert.alert(props.file.error)
            setLoading(false);
        }
        if (typeof props.file.file !== 'undefined' &&
            props.file.file
        ) {
            setFile({});
            setLoading(false);
            setUpdatedImg(props.file.file.data);
        }
    }, [props.file])

    const reset = () => {
        setUpdatedImg(null);
        setLoading(false);
    }

    return (
        <>
            <CenterView>
                {file?.uri ? <>
                    <Image
                        source={{ uri: file.uri }}
                        style={{ width: '90%', height: (height * 0.5), resizeMode: 'cover' }}
                    />
                    <Whitespace />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                        <Button
                            btnText="Upload"
                            onPress={handleSubmit}
                            btnStyles={{ backgroundColor: '#0277FE' }}
                            loading={loading}
                            Icon={<Icon name="cloud-upload-outline" size={20} color={"#fff"} style={{ marginRight: 5 }} />}
                        />
                        <Button
                            btnText="Remove"
                            onPress={() => setFile({})}
                            btnStyles={{ backgroundColor: '#D3534B' }}
                            Icon={<Icon name="close-circle-outline" size={20} color={"#fff"} style={{ marginRight: 5 }} />}
                        />
                    </View>
                </> : !updatedImg ? <Pressable style={{ alignItems: 'center' }} onPress={openPicker}>
                    <Icon name="cloud-upload-outline" size={60} style={{ opacity: 0.3 }} />
                    <View style={{ width: '65%', }}>
                        <Text style={{ opacity: 0.6, textAlign: 'center' }}>Select an image file and then click on the upload button</Text>
                    </View>
                </Pressable> : null}

                {updatedImg && <>
                    <Image
                        source={{ uri: `${Config.BASE_URL}/${updatedImg}` }}
                        style={{ width: '90%', height: (height * 0.5), resizeMode: 'contain' }}
                    />
                    <Button
                        btnText="Go again!"
                        onPress={reset}
                        btnStyles={{ backgroundColor: '#0277FE', marginTop: 20 }}
                        Icon={<Icon name="reload-outline" size={20} color={"#fff"} style={{ marginRight: 5 }} />}
                    />
                </>}
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
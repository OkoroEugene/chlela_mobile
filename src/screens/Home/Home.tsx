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
import { useEffect } from 'react';
import { Alert } from 'react-native';
import Config from 'react-native-config';
import styles from './Home.styles';
import ImagePreview from '../../components/ImagePreview/ImagePreview';
import LoadingView from '../../components/LoadingView/LoadingView';

function Home(props: IHome) {
    const [loading, setLoading] = useState(false);
    const [loadImg, setLoadImg] = useState(false);
    const [file, setFile] = useState<IFile>({
        uri: null,
        type: null,
        name: null,
    });
    const [updatedImg, setUpdatedImg] = useState(null);

    const openPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        })
            .then(image => {
                const { path, mime } = image;
                const path_split: any = path?.split('/');
                const name = path_split[path_split.length - 1];
                
                setFile({
                    uri: path,
                    name,
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
        setFile({});
    }

    return (
        <>
            <CenterView>
                {file?.uri && <ImagePreview
                    uri={file.uri}
                    loading={loading}
                    reset={reset}
                    handleSubmit={handleSubmit}
                />}

                {!updatedImg && !file?.uri && <Pressable
                    style={styles.pressable}
                    onPress={openPicker}
                >
                    <Icon
                        name="cloud-upload-outline"
                        size={60}
                        style={{ opacity: 0.3 }}
                    />
                    <View style={{ width: '65%', }}>
                        <Text style={styles.iconPreview}>Select an image file and then click on the upload button</Text>
                    </View>
                </Pressable>}

                {updatedImg && <>
                    <Image
                        source={{ uri: `${Config.BASE_URL}/${updatedImg}` }}
                        style={styles.updatedImg}
                        onLoadStart={() => setLoadImg(true)}
                        onLoadEnd={() => setLoadImg(false)}
                    />
                    {loadImg && <LoadingView />}
                    {!loadImg && <Button
                        btnText="Go again!"
                        onPress={reset}
                        btnStyles={{ backgroundColor: '#0277FE', marginTop: 20 }}
                        Icon={<Icon
                            name="reload-outline"
                            size={20}
                            color={"#fff"}
                            style={{ marginRight: 5 }}
                        />}
                    />}
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
    uri?: string | null,
    type?: string | null,
    name?: string | null,
}

const mapStateToProps = (state: any) => ({
    file: state.file,
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ createImage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
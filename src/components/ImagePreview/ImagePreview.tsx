import React from 'react';
import {
    Image,
    View,
} from 'react-native';
import Whitespace from '../Whitespace/Whitespace';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../Button/Button';
import styles from './ImagePreview.styles';

interface Props {
    uri?: string,
    loading?: boolean,
    handleSubmit: () => void,
    reset: (e: object) => void,
}

export default function ImagePreview(props: Props) {
    const {
        uri,
        loading,
        handleSubmit,
        reset,
    } = props;

    return (
        <>
            <Image
                source={{ uri: uri }}
                style={styles.imgPreview}
            />
            <Whitespace />
            <View style={styles.btnContainer}>
                <Button
                    btnText="Upload"
                    onPress={handleSubmit}
                    btnStyles={styles.btnUpload}
                    loading={loading}
                    Icon={<Icon
                        name="cloud-upload-outline"
                        size={20} color={"#fff"}
                        style={{ marginRight: 5 }}
                    />}
                />
                <Button
                    btnText="Remove"
                    onPress={() => reset({})}
                    btnStyles={styles.btnRemove}
                    Icon={<Icon
                        name="close-circle-outline"
                        size={20} color={"#fff"}
                        style={{ marginRight: 5 }}
                    />}
                />
            </View>
        </>
    )
}
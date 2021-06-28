import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import ImagePreview from './ImagePreview'
import CenterView from '../CenterView/CenterView';

storiesOf('Image Preview', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('preview mock image', () => (
        <ImagePreview
            uri={"https://images.pexels.com/photos/8479967/pexels-photo-8479967.jpeg"}
            loading={false}
            handleSubmit={() => { }}
            reset={() => { }}
        />
    ))

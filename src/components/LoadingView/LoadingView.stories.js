import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Loader from './LoadingView'
import CenterView from '../CenterView/CenterView';

storiesOf('LoadingView', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('empty state with loader', () => (
        <Loader />
    ))

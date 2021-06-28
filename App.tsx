/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigators from './src/navigation/navigation';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import store from './src/store/createStore';
import { navigationRef } from './src/navigation/NavigationService';
import Config from 'react-native-config';
import StorybookUI from './storybook'
import { NativeBaseProvider } from 'native-base';

function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <AppNavigators />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
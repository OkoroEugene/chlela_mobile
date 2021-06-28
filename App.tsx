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
import { Provider } from 'react-redux';
import store from './src/store/createStore';
import { navigationRef } from './src/navigation/NavigationService';
import Config from 'react-native-config';
import StorybookUI from './storybook'

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

/**
* use this for storybook
* export default StorybookUI; 

* use this for main app
* should be this way: 
* export default Config.LOAD_STORYBOOK == 'true' ? StorybookUI : App;
* but there is this weird behaviour that happens when I export it that way
* I will look into this issue to find out why it is so
*/

export default App;
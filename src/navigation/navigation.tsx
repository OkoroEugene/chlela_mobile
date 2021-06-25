import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Auth screens section
import SplashScreen from '../screens/Splash/Splash';
import HomeScreen from '../screens/Home/Home';

const Stack = createStackNavigator();

function AppNavigators() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigators;

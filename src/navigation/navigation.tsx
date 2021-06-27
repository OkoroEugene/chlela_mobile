import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Auth screens section
import SplashScreen from '../screens/Splash/Splash';
import HomeScreen from '../screens/Home/Home';

const Stack = createStackNavigator();

function AppNavigators() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
    </Stack.Navigator>
  );
}

export default AppNavigators;

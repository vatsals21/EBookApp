/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartScreen, DescScreen, HomeScreen, ReaderScreen} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="cart"
          options={{headerShown: false}}
          component={CartScreen}
        />
        <Stack.Screen
          name="description"
          options={{headerShown: false}}
          component={DescScreen}
        />
        <Stack.Screen
          name="reader"
          options={{headerShown: false}}
          component={ReaderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

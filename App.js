import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/components/SplashScreen/Splash';
import HomeScreen from './src/components/HomeScreen/Home';
import WordScreen from './src/components/WordScreen/Word';

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator
        initialRouteName="Splash"
    >
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          headerShown: false,
          animationEnabled: false,
        }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
          animationEnabled: false,
        }} />
        <Stack.Screen name="Word" component={WordScreen} />
    </Stack.Navigator> 
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

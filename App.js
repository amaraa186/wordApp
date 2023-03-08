import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./src/components/SplashScreen/Splash";
import HomeScreen from "./src/components/HomeScreen/Home";
import WordsScreen from "./src/components/WordScreen/Words";

const Stack = createStackNavigator();

function Stacks() {
  const setCustomHeader = (props) => {
    return {
      headerTitle: props.route.params.title,
    };
  };

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Words"
        component={WordsScreen}
        options={(props) => setCustomHeader(props)}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

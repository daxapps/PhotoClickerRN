import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home}
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#b83227"
      },
      headerTitleStyle: {
        color: "white"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;



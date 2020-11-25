import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Camera" component={Camera} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

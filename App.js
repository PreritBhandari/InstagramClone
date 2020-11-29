import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Base from "./components/Base";
import Chat from "./components/Chat";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Base"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Base" component={Base} />
        <Stack.Screen name="ChatScreen" component={Chat} />
        {/* <Stack.Screen name="Camera" component={Camera} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

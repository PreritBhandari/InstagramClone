import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "react-native-vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { View, Image } from "react-native";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function Base() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            return focused ? (
              <FontAwesome name="search" size={28} color="white" />
            ) : (
              <Feather name="search" size={28} color="white" />
            );
          } else if (route.name === "Add") {
            iconName = focused ? "plus-box-outline" : "plus-box-outline";
          } else if (route.name === "Love") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            return (
              <Image
                source={{
                  uri:
                    "https://media-exp1.licdn.com/dms/image/C5103AQETXVh8XW5epg/profile-displayphoto-shrink_100_100/0?e=1611792000&v=beta&t=vjPXG_B73diuLxgD3P10lvdq5w-2hctg-NCDATA4UXs",
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 25,
                }}
              />
            );
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={28} color="white" />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "#151516",
        },
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Add" component={Home} />
      <Tab.Screen name="Love" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

import React from "react";
import { View, Text } from "react-native";
import Story from "./Story";
import Posts from "./Posts";

import MainHeader from "./MainHeader";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View>
      <MainHeader />
      <ScrollView style={{ backgroundColor: "black", height: "100%" }}>
        <Story />
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 0.4,
            opacity: 0.4,
          }}
        />
        <Posts />
      </ScrollView>
    </View>
  );
}

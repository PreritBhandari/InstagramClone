import React from "react";
import { View, Text } from "react-native";
import Story from "./Story";
import Posts from "./Posts";
import posts from "../assets/DummyDatas/posts";

import MainHeader from "./MainHeader";
import { ScrollView, FlatList } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View>
      <MainHeader />
      <View style={{ marginBottom: "45%" }}>
        <ScrollView
          style={{
            backgroundColor: "black",
            height: "100%",
          }}
          showsVerticalScrollIndicator={false}
        >
          <Story />
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 0.4,
              opacity: 0.4,
            }}
          />
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Posts item={item} />}
          />
        </ScrollView>
      </View>
    </View>
  );
}

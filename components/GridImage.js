import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import story from "../assets/DummyDatas/story";

export default function GridImage() {
  return (
    <View style={{ marginBottom: "27%", backgroundColor: "#151516" }}>
      <FlatList
        data={story}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 0.5,
            }}
          >
            <Image
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 100,
              }}
              source={{ uri: item.image }}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import message from "../assets/DummyDatas/message";

export default function ChatList() {
  return (
    <View style={{ backgroundColor: "black" }}>
      <FlatList
        data={message}
        renderItem={({ item }) => (
          <View style={{ marginRight: 15, padding: 10, flexDirection: "row" }}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 40,
              }}
            />
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  color: "white",
                }}
              >
                {item.name}
              </Text>
              <View style={{ flexDirection: "row", paddingTop: 3 }}>
                <Text
                  style={{
                    color: "grey",
                  }}
                >
                  {item.msg} .{" "}
                </Text>
                <Text
                  style={{
                    color: "grey",
                  }}
                >
                  {item.time}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

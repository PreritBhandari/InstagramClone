import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons, Feather } from "react-native-vector-icons";

export default function Posts() {
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <View style={{ marginRight: 15, padding: 10, flexDirection: "row" }}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/236x/f9/d7/e9/f9d7e9d06011c644dd09b27d4753d2c9.jpg",
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 30,

            borderWidth: 2,
            borderColor: "#e35d47",
          }}
        />
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            padding: 10,
          }}
        >
          neji
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/236x/f9/d7/e9/f9d7e9d06011c644dd09b27d4753d2c9.jpg",
          }}
          style={{
            width: "100%",
            height: "150%",
          }}
        />
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color="white"
              style={{ padding: 5 }}
            />
            <MaterialCommunityIcons
              name="chat-outline"
              size={30}
              color="white"
              style={{ padding: 5 }}
            />
            <Feather
              name="send"
              size={23}
              color="white"
              style={{ padding: 5 }}
            />
          </View>
          <View>
            <Feather
              name="bookmark"
              size={26}
              color="white"
              style={{ padding: 5 }}
            />
          </View>
        </View>
      </View>

      <View></View>
      <View></View>
    </View>
  );
}

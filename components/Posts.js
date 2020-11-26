import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons, Feather } from "react-native-vector-icons";
import {
  TouchableOpacity,
  TapGestureHandler,
} from "react-native-gesture-handler";

export default function Posts({ item }) {
  const [likedno, setlikedno] = useState(item.likedno);
  const [isLiked, setisliked] = useState(item.isLiked);

  const [color, setColor] = useState("white");
  const [heartname, setheartname] = useState("heart-outline");

  const onLike = () => {
    setColor("red");
    setheartname("heart");
    if (isLiked === false) {
      setlikedno(likedno + 1);
      setisliked(true);
    } else {
      setlikedno(likedno - 1);
      setisliked(false);
      setColor("white");
      setheartname("heart-outline");
    }
  };

  return (
    <View style={{ flexDirection: "column", marginBottom: "93%", flex: 1 }}>
      <View style={{ marginRight: 15, padding: 10, flexDirection: "row" }}>
        <Image
          source={{
            uri: item.image,
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
          {item.name}
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Image
          source={{
            uri: item.postimage,
          }}
          style={{
            width: "100%",
            height: "100%",
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
              onPress={onLike}
              name={heartname}
              size={30}
              color={color}
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
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: item.likedimages[0].image,
            }}
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              position: "absolute",
              marginLeft: 27,
            }}
          />
          <Image
            source={{
              uri: item.likedimages[1].image,
            }}
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,

              marginLeft: 15,
            }}
          />

          <Text style={{ color: "white", fontSize: 15, paddingLeft: 20 }}>
            Liked by{" "}
            <Text style={{ fontWeight: "600" }}>
              {item.likedimages[1].name}{" "}
            </Text>
            and <Text style={{ fontWeight: "600" }}>{likedno} others</Text>
          </Text>
        </View>
        <View style={{ padding: 3 }}>
          <Text style={{ color: "white", marginLeft: 10 }}>
            <Text style={{ fontWeight: "600" }}>{item.name} </Text>{" "}
            {item.status}
          </Text>
          <Text style={{ color: "grey", marginTop: 4, marginLeft: 10 }}>
            View all {item.maxcomments} comments
          </Text>
          <Text style={{ color: "grey", marginTop: 4, marginLeft: 10 }}>
            {item.time}
          </Text>
        </View>
      </View>
    </View>
  );
}

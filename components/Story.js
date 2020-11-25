import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import story from "../assets/story /story";

export default function Story() {
  console.log(story);
  return (
    <ScrollView style={{ margin: 10 }} horizontal={true}>
      <View style={{ marginRight: 15 }}>
        <Image
          source={{
            uri:
              "https://media-exp1.licdn.com/dms/image/C5103AQETXVh8XW5epg/profile-displayphoto-shrink_100_100/0?e=1611792000&v=beta&t=vjPXG_B73diuLxgD3P10lvdq5w-2hctg-NCDATA4UXs",
          }}
          style={{
            width: 65,
            height: 65,
            borderRadius: 50,

            borderWidth: 3,
            borderColor: "#e35d47",
          }}
        />
        <Text style={{ color: "silver", padding: 4 }}>Your Story</Text>
      </View>
      <FlatList
        horizontal={true}
        data={story}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginRight: 15 }}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 65,
                height: 65,
                borderRadius: 50,

                borderWidth: 3,
                borderColor: "#e35d47",
              }}
            />
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "500",
                padding: 4,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

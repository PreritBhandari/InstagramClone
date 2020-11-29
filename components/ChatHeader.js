import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, Entypo } from "react-native-vector-icons";

export default function ChatHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <View
        style={{
          paddingTop: "10%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Feather
            name="chevron-left"
            size={28}
            style={{ padding: 10 }}
            color="white"
            onPress={() => navigation.navigate("Base")}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            preritbhandari
          </Text>
          <Feather name="chevron-down" size={20} color="white" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Feather
            name="list"
            style={{ padding: 10 }}
            size={28}
            color="white"
          />
          <Entypo
            name="new-message"
            style={{ padding: 10 }}
            size={28}
            color="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "11%",
    width: "100%",
    backgroundColor: "#151516",
  },
});

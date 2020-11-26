import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { Feather } from "react-native-vector-icons";

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
      <View
        style={{
          paddingTop: "10%",
          marginLeft: "24%",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
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
        <View>
          <Feather
            name="align-justify"
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

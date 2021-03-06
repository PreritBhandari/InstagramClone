import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Feather } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const fetchFonts = () => {
  return Font.loadAsync({
    billabong: require("../assets/fonts/Billabong.ttf"),
  });
};

export default function MainHeader() {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = React.useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
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
            name="camera"
            size={28}
            style={{ padding: 10 }}
            color="white"
          />
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 38,
              fontFamily: "billabong",
            }}
          >
            Instagram
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
            <Feather
              name="send"
              style={{ padding: 10 }}
              size={28}
              color="white"
            />
          </TouchableOpacity>
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

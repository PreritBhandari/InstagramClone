import React from "react";
import {
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Text,
  ART,
} from "react-native";
import ChatHeader from "./ChatHeader";
import { FontAwesome } from "react-native-vector-icons";
import { Container, Header, Item, Icon, Input } from "native-base";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatList from "./ChatList";

const ChatTab = createMaterialTopTabNavigator();

export default function Chat({ navigation }) {
  return (
    <View style={styles.container}>
      <ChatHeader navigation={navigation} />

      <Container style={{ backgroundColor: "black" }}>
        <ScrollView>
          <Header searchBar transparent rounded>
            <Item style={{ height: 40, backgroundColor: "#151516" }}>
              <Icon style={{ color: "silver" }} name="ios-search" />
              <Input
                style={{ color: "silver" }}
                placeholder="Search"
                placeholderTextColor="silver"
              />
              <FontAwesome
                color="silver"
                name="sliders"
                size={18}
                style={{ padding: 10 }}
              />
            </Item>
          </Header>

          <Text>Hello</Text>

          <ChatTab.Navigator
            tabBarOptions={{
              activeTintColor: "white",
              inactiveTintColor: "grey",
              style: {
                backgroundColor: "black",
              },
              showLabel: true,
              indicatorStyle: {
                backgroundColor: "white",
                height: 1,
              },
            }}
          >
            <ChatTab.Screen name="Primary" component={ChatList} />
            <ChatTab.Screen name="General" component={ChatList} />
          </ChatTab.Navigator>
        </ScrollView>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
});

import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import ProfileHeader from "./ProfileHeader";
import { StyleSheet } from "react-native";

import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GridImage from "./GridImage";

const GridTab = createMaterialTopTabNavigator();

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader />
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 0.4,
          opacity: 0.4,
        }}
      />
      <View>
        <ScrollView
          style={{
            backgroundColor: "#151516",
            height: "100%",
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri:
                  "https://media-exp1.licdn.com/dms/image/C5103AQETXVh8XW5epg/profile-displayphoto-shrink_100_100/0?e=1611792000&v=beta&t=vjPXG_B73diuLxgD3P10lvdq5w-2hctg-NCDATA4UXs",
              }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 80,
                borderWidth: 3,
                borderColor: "#e35d47",
              }}
            />

            <Text style={styles.textTop}>
              <Text style={styles.textTopSec}>5</Text> {"\n"}
              Posts
            </Text>
            <Text style={styles.textTop}>
              <Text style={styles.textTopSec}>300</Text> {"\n"}Followers
            </Text>
            <Text style={styles.textTop}>
              <Text style={styles.textTopSec}>20</Text> {"\n"}
              Following
            </Text>
          </View>
          <View style={{ padding: 15 }}>
            <Text style={{ color: "white", fontWeight: "600" }}>
              Prerit Bhandari
            </Text>
            <Text
              style={{ color: "grey", fontWeight: "500", paddingVertical: 2 }}
            >
              Enthusiastic Learner
            </Text>
            <Text style={{ color: "white" }}>
              Sweet achieved with no sweat is never sweeter
            </Text>
            <Text style={{ color: "white" }}>www.initdevelops.tech/</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              flex: 1,
              paddingBottom: 25,
            }}
          >
            <View style={styles.infobox}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Edit Profile
              </Text>
            </View>
            <View style={styles.infobox}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Promotions
              </Text>
            </View>
            <View style={styles.infobox}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Insights
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-around",
              width: "45%",
            }}
          >
            <View>
              <View
                style={[
                  styles.profileMemoryCircle,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Feather name="plus" color="white" size={30} />
              </View>
              <Text style={styles.textTop}> New </Text>
            </View>
            <View>
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/236x/97/9d/84/979d84143d11635089640b1074bdbe7f.jpg",
                }}
                style={styles.profileMemoryCircle}
              />
              <Text style={styles.textTop}> Friends </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 0.4,
              opacity: 0.4,
              paddingVertical: 10,
              marginBottom: 2,
            }}
          />

          <GridTab.Navigator
            tabBarOptions={{
              activeTintColor: "white",
              inactiveTintColor: "grey",
              style: {
                backgroundColor: "#151516",
              },
              showLabel: false,
              showIcon: true,
              indicatorStyle: {
                backgroundColor: "white",
                height: 2,
              },
            }}
          >
            <GridTab.Screen
              name="Camera"
              component={GridImage}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="grid" color="white" size={25} />
                ),
              }}
            />
            <GridTab.Screen
              name="Chats"
              component={GridImage}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name="tooltip-account"
                    color="white"
                    size={25}
                  />
                ),
              }}
            />
          </GridTab.Navigator>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTop: { color: "white", textAlign: "center", fontSize: 15 },
  textTopSec: {
    fontWeight: "600",
    fontSize: 18,
  },
  infobox: {
    backgroundColor: "black",
    width: "30%",
    height: "120%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: "grey",
  },
  profileMemoryCircle: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "grey",
  },
});

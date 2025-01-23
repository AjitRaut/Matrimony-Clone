import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ReceivedScreen from "./RecivedScreen";
import AwaitingResponse from "./AwaitingResponse";
import CallsScreen from "./Calls";

const Tab = createMaterialTopTabNavigator();

const MessageScreen = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#000",
          tabBarIndicatorStyle: {
            backgroundColor: "green",
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            textTransform: "none",
          },
          tabBarStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Tab.Screen name="Received" component={ReceivedScreen} />
        <Tab.Screen name="Awaiting Response" component={AwaitingResponse} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default MessageScreen;

export const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

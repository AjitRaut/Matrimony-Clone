import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ReceivedScreen from "./RecivedScreen";
import AwaitingResponse from "./AwaitingResponse";
import CallsScreen from "./Calls";

const Tab = createMaterialTopTabNavigator();

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#00A300",
          tabBarInactiveTintColor: "#666",
          tabBarIndicatorStyle: {
            backgroundColor: "#00A300",
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: "none",
          },
        }}
      >
        <Tab.Screen name="Received" component={ReceivedScreen} />
        <Tab.Screen
          name="Awaiting Response"
          component={AwaitingResponse}
        />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MessageScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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

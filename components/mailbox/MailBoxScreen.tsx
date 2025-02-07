import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Received from "./Received";
import Sent from "./Sent";
import Requests from "./Requests";
import Calls from "./Calls";
import InterestsScreen from "./Received";
import RegularPrime from "../RegularPrime";

const Tab = createMaterialTopTabNavigator();

const MailBoxScreen: React.FC = () => {
  return (
    <>
      <RegularPrime/>
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
        <Tab.Screen name="Received" component={InterestsScreen} />
        <Tab.Screen name="Sent" component={Sent} />
        <Tab.Screen name="Requests" component={Requests} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </>
  );
};

export default MailBoxScreen;

const styles = StyleSheet.create({
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

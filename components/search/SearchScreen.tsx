import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ByCriteria from "./ByCriteria";
import ByProfileID from "./ByProfileID";
import SavedSearch from "./SavedSearch";

const Tab = createMaterialTopTabNavigator();

const SearchScreen: React.FC = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
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
        <Tab.Screen name="By Criteria" component={ByCriteria} />
        <Tab.Screen name="By Profile ID" component={ByProfileID} />
        <Tab.Screen name="Saved Search" component={SavedSearch} />
      </Tab.Navigator>
    </>
  );
};

export default SearchScreen;

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

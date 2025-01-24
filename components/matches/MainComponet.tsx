import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import MatchMaking from "./MatchMaking";
import MainScreen from "./more/MainScreen";
import RegularPrime from "../RegularPrime";

const Tab = createMaterialTopTabNavigator();

const MatchesScreen = () => {
  return (
    <>
    <RegularPrime />
     
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#007b00",
          tabBarInactiveTintColor: "#000",
          tabBarIndicatorStyle: {
            backgroundColor: "#007b00",
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: "none",
          },
          tabBarStyle: {
            backgroundColor: "#fff",
          },
          tabBarLabel: ({ color }) => {
            if (route.name === "More") {
              return (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color }}>More</Text>
                  <Ionicons
                    name="chevron-down"
                    size={16}
                    color={color}
                    style={{ marginLeft: 4 }}
                  />
                </View>
              );
            }
            return <Text style={{ color }}>{route.name}</Text>;
          },
        })}
      >
        <Tab.Screen name="All matches" component={MatchMaking} />
        <Tab.Screen name="Newly joined" component={MatchMaking} />
        <Tab.Screen name="More" component={MainScreen} />
      </Tab.Navigator>
    </>
    
  );
};

export default MatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#f8f8f8",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

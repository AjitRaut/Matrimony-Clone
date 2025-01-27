import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#046A4A", 
        tabBarInactiveTintColor: "#5A5A5A", 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: Platform.OS === "android" ? 4 : 0,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon name="home" size={28} color={focused ? "#046A4A" : color} />
          ),
        }}
      />

      <Tabs.Screen
        name="matches"
        options={{
          title: "Matches",
          tabBarIcon: ({ color, focused }) => (
            <Icon name="user" size={28} color={focused ? "#046A4A" : color} />
          ),
        }}
      />

      <Tabs.Screen
        name="mailbox"
        options={{
          title: "Mailbox",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="envelope"
              size={28}
              color={focused ? "#046A4A" : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcon
              name="message"
              size={28}
              color={focused ? "#046A4A" : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcon
              name="search"
              size={28}
              color={focused ? "#046A4A" : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcon
              name="build"
              size={28}
              color={focused ? "#046A4A" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MessageScreen from "@/components/messages/MessageScreen";

const messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MessageScreen />
    </SafeAreaView>
  );
};

export default messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
});

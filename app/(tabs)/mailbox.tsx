import MailBoxScreen from "@/components/mailbox/MailBoxScreen";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mailbox = () => {
  return (
    <SafeAreaView style={styles.container}>
     <MailBoxScreen/>
    </SafeAreaView>
  );
};

export default mailbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
});

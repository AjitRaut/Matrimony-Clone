import SearchScreen from "@/components/search/SearchScreen";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen/>
    </SafeAreaView>
  );
};

export default search;

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

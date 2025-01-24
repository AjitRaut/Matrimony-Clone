import MainComponent from "@/components/matches/MainComponet";
import MatchMaking from "@/components/matches/MatchMaking";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Matches = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MatchMaking/> */}
      <MainComponent/>
    </SafeAreaView>
  );
};

export default Matches;

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

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ServiceHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Our <Text style={styles.highlightedText}>Trusted</Text> Services
      </Text>
    </View>
  );
};

export default ServiceHeader;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor:"#FFF5EF"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  highlightedText: {
    color: "#00bcd4",
  },
});

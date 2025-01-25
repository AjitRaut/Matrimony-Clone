import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const WantToMore = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Want to know more?</Text>
      <View style={styles.arrowContainer}>
        <FontAwesome5 name="chevron-down" size={20} color="#ccc" />
        <FontAwesome5 name="chevron-down" size={20} color="#ccc" style={styles.arrowSpacing} />
        <FontAwesome5 name="chevron-down" size={20} color="#ccc" style={styles.arrowSpacing} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  arrowContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  arrowSpacing: {
    marginTop: -8, // Adjust overlap between arrows
  },
});

export default WantToMore;

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const RegularPrime: React.FC = () => {
  return (
    <View style={styles.membershipContainer}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.regularButton}>
          <Text style={styles.regularText}>Regular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primeButton}>
          <View style={styles.primeContainer}>
            <View style={styles.redDot} />
            <Text style={styles.primeText}>PRIME</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegularPrime;

const styles = StyleSheet.create({
  membershipContainer: {
    paddingTop: 25,
    alignItems: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderRadius: 25,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
  regularButton: {
    backgroundColor: "#ffe7d4",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  primeButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  regularText: {
    color: "#FF6B00",
    fontWeight: "500",
  },
  primeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  redDot: {
    width: 5,
    height: 5,
    backgroundColor: "#FF0000",
    borderRadius: "100%",
    position: "absolute",
    top: 1,
    right: -7,
  },
  primeText: {
    color: "#000000",
    fontWeight: "500",
  },
});

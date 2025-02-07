import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const AssistedService = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContent}>
        <Image
          source={require('../../assets/images/assisted-logo.png')}
          style={styles.icon}
        />
        <View style={styles.textContent}>
          <Text style={styles.title}>Assisted Service</Text>
          <Text style={styles.description}>
            Find your match 3x faster! Talk to our Matrimony Expert.
          </Text>
        </View>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
};

export default AssistedService;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFA500",
    marginRight: 12,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  chevron: {
    fontSize: 24,
    color: "#666",
  },
});

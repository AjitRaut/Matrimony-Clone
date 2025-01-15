import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WelcomeOffer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <Text style={styles.welcomeText}>WELCOME OFFER</Text>
          <Text style={styles.offerText}>Flat 61% OFF</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get it now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rightSection}>
          <View style={styles.bagContainer}>
            <MaterialCommunityIcons name="shopping" size={40} color="#FF6B6B" />
            <View style={styles.dotsContainer}>
              <View style={[styles.dot, { backgroundColor: "#4A90E2" }]} />
              <View style={[styles.dot, { backgroundColor: "#FF6B6B" }]} />
              <View style={[styles.dot, { backgroundColor: "#F5A623" }]} />
            </View>
          </View>
          <Text style={styles.offerEndsText}>
            Offer ends <Text style={styles.todayText}>today!</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 13,
    marginVertical: 8,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  offerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF4757",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#E65100",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  rightSection: {
    alignItems: "center",
  },
  bagContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#FFE0E0",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 2,
    right: 140,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  offerEndsText: {
    fontSize: 14,
    color: "#666",
  },
  todayText: {
    color: "#FF4757",
    fontStyle: "italic",
  },
});

export default WelcomeOffer;

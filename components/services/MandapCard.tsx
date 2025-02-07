import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const MandapCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          <Text style={{ color: "#FF5A5F", fontWeight: "bold" }}>mandap</Text>
          .com
        </Text>
        <Text style={styles.subText}>from Matrimony.com group</Text>
      </View>

      <Text style={styles.title}>
        India's Largest wedding venue Booking Platform
      </Text>

      <View style={styles.listItem}>
        <FontAwesome5 name="headphones" size={16} color="#FF5A5F" />
        <Text style={styles.listText}>
          <Text style={styles.boldText}>Free assistance</Text> in finding your
          venue
        </Text>
      </View>

      <View style={styles.listItem}>
        <MaterialIcons name="verified-user" size={16} color="#FF5A5F" />
        <Text style={styles.listText}>
          <Text style={styles.boldText}>100% verified</Text> venues
        </Text>
      </View>

      <View style={styles.listItem}>
        <FontAwesome5 name="building" size={16} color="#FF5A5F" />
        <Text style={styles.listText}>
          <Text style={styles.boldText}>40,000+</Text> venues
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Know More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    margin: 16,
  },
  header: {
    marginBottom: 8,
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF5A5F",
  },
  subText: {
    fontSize: 12,
    color: "#999",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginVertical: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  listText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 8,
  },
  boldText: {
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    backgroundColor: "#FF5A5F",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default MandapCard;

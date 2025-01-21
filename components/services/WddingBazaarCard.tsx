import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const WeddingBazaarCard: React.FC = () => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          wedding
          <Text style={{ color: "red" }}>bazaar</Text>
        </Text>
        <Text style={styles.subText}>from Matrimony.com group</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>India's Largest Wedding Planning Platform</Text>

      {/* List Items */}
      <View style={styles.listItem}>
        <FontAwesome5 name="camera" size={16} color="#FF5A5F" />
        <Text style={styles.listText}>
          Photographers, Makeup artists, Caterers and more. Hire best vendors!
        </Text>
      </View>

      <View style={styles.listItem}>
        <FontAwesome5 name="users" size={16} color="#FF5A5F" />
        <Text style={styles.listText}>
          Trusted wedding marketplace from matrimony.com group
        </Text>
      </View>

      <View style={styles.listItem}>
        <FontAwesome5 name="store" size={16} color="#FF5A5F" />
        <Text style={styles.listText}>
          2.8 Lakh+ trusted vendors across 40+ cities
        </Text>
      </View>

      {/* Button */}
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

export default WeddingBazaarCard;

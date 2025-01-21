import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const EliteMatrimonyCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#A10A31" }}>
            Elite
          </Text>
          Matrimony
        </Text>
        <Text style={styles.subText}>
          The largest & most successful matrimony service for elite
        </Text>
      </View>

      <View style={styles.listItem}>
        <FontAwesome5 name="users" size={16} color="#A10A31" />
        <Text style={styles.listText}>
          <Text style={styles.boldText}>Served over 50,000</Text> Elite
          customers
        </Text>
      </View>

      <View style={styles.listItem}>
        <MaterialIcons name="verified" size={16} color="#A10A31" />
        <Text style={styles.listText}>
          <Text style={styles.boldText}>Exclusive base</Text> of elite members
        </Text>
      </View>

      <View style={styles.listItem}>
        <FontAwesome5 name="lock" size={16} color="#A10A31" />
        <Text style={styles.listText}>
          <Text style={styles.boldText}>100% confidential</Text> service
        </Text>
      </View>

      <View style={styles.listItem}>
        <FontAwesome5 name="headphones" size={16} color="#A10A31" />
        <Text style={styles.listText}>
          <Text style={styles.boldText}>Dedicated relationship manager</Text>
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
    color: "#A10A31",
  },
  subText: {
    fontSize: 12,
    color: "#555",
    marginVertical: 4,
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
    backgroundColor: "#FF7B5A",
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

export default EliteMatrimonyCard;

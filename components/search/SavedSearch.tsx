import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SavedSearch: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        No saved searches yet. Click below to create your search criteria
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f47216",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 35,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

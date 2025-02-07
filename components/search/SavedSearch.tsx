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
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
  },
  infoText: {
    fontSize: 15,
    color: "#000",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f47216",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 35,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SearchMatches: React.FC = () => {
  const matches = 12; 

  return (
    <View style={styles.container}>
      <Text style={styles.matchesText}>
        {matches} matches based on your preferences
      </Text>

      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchMatches;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  matchesText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: "#f47216",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 30,
    textAlign: "center",
    width: "90%",
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

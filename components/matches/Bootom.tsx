import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Bootom: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Message Text */}
      <Text style={styles.message}>You have seen all matches in this section.</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to next section</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bootom;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8", 
    padding: 16,
  },
  message: {
    fontSize: 16,
    color: "#333", 
    textAlign: "center",
    marginBottom: 20, 
  },
  button: {
    borderWidth: 1,
    borderColor: "#c76a1d", 
    borderRadius: 24, 
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#c76a1d", 
    fontSize: 16,
    fontWeight: "bold",
  },
});

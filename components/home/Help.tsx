import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Help = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.questionMark}>?</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Need Help? Reach out to us with{"\n"}your queries!
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    marginHorizontal: 26,
    marginVertical: 10,
    borderRadius: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#40C1A0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  questionMark: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: "#000000",
    lineHeight: 24,
  },
});

export default Help;

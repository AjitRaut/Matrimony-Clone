// Calls.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ContactedYou from "./ContactYou";
import ContactedByYou from "./ContactByYou";

const Calls: React.FC = () => {
const [activeButton, setActiveButton] = useState<"contacted" | "contactedBy" | "  ">(
  "contacted"
);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "contacted" && styles.activeButton,
          ]}
          onPress={() => setActiveButton("contacted")}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === "contacted" && styles.activeButtonText,
            ]}
          >
            Contacted you
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "contactedBy" && styles.activeButton,
          ]}
          onPress={() => setActiveButton("contactedBy")}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === "contactedBy" && styles.activeButtonText,
            ]}
          >
            Contacted by you
          </Text>
        </TouchableOpacity>
      </View>

      {activeButton === "contacted" && <ContactedYou />}
      {activeButton === "contactedBy" && <ContactedByYou />}
    </View>
  );
};

export default Calls;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#FFF5F1",
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 6,
    backgroundColor: "#FFF5F1",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  buttonText: {
    fontSize: 14,
    color: "#666666",
  },
  activeButtonText: {
    color: "#FFFFFF",
  },
});

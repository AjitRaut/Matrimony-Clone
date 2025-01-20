// ContactedYou.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ContactedYou = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Matches who tried contacting you</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Privacy Settings ⚙️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.emptyState}>
        <Text style={styles.emptyTitle}>
          No Members have attempted to contact you.
        </Text>
        <Text style={styles.emptySubtitle}>
          Come back later or initiate new conversations with matches online
        </Text>
      </View>
    </View>
  );
};

export default ContactedYou;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  settingsButton: {
    padding: 8,
  },
  settingsText: {
    fontSize: 14,
    color: "#666",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

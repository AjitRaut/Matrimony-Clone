// ContactedByYou.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContactedByYou = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Matches you tried contacting</Text>
      </View>
      <View style={styles.emptyState}>
        <Text style={styles.emptyTitle}>
          You have not contacted any member till now
        </Text>
        <Text style={styles.emptySubtitle}>
          View Matches who are online and initiate conversations
        </Text>
      </View>
    </View>
  );
};

export default ContactedByYou;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
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

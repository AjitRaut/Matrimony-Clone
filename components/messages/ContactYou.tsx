import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

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
        <Image
          source={{
            uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/mailbox/chat-converstion.png",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.emptyTitle}>
          No Members have attempted to contact you.
        </Text>
        <Text style={styles.emptySubtitle}>
          Come back later or initiate new conversations with matches online.
        </Text>
      </View>
    </View>
  );
};

export default ContactedYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  settingsButton: {
    padding: 8,
    borderRadius: 5,
  },
  settingsText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    textAlign: "center",
    marginBottom: 12,
  },
  emptySubtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
});

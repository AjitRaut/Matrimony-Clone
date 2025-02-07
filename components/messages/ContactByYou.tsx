import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ContactedByYou = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/mailbox/chat-converstion.png",
          }}
          style={styles.image}
          resizeMode="contain"
        />
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
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center", 
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    textAlign: "center", // Centers the text
  },
  emptyState: {
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
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

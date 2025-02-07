import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import RequestRecieved from "./RequestRecieved";

const Requests: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"received" | "sent">(
    "received"
  );
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "received" && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab("received")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "received" && styles.activeTabText,
            ]}
          >
            Requests received
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "sent" && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab("sent")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "sent" && styles.activeTabText,
            ]}
          >
            Requests sent
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {selectedTab === "received" ? (
          <RequestRecieved />
        ) : (
          <View style={styles.emptyState}>
            <Image
              source={{
                uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/mailbox/chat-converstion.png",
              }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.message}>You have not sent any requests</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFF5EF",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: "#4CAF50",
  },
  tabText: {
    fontSize: 14,
    color: "#666666",
  },
  activeTabText: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: "#555",
  },
});

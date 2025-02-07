import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import RequestRecieved from "./RequestRecieved";

const Calls: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"Contacted you" | "Contacted by you">(
    "Contacted you"
  );
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Contacted you" && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab("Contacted you")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Contacted you" && styles.activeTabText,
            ]}
          >
             Contacted you
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Contacted by you" && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab("Contacted by you")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Contacted by you" && styles.activeTabText,
            ]}
          >
            Contacted by you
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {selectedTab === "Contacted you" ? (
          <RequestRecieved />
        ) : (
          <View style={styles.emptyState}>
            <Image
              source={{
                uri: 'https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/mailbox/chat-converstion.png',
              }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.message}>You have not Contacted by you any requests</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Calls;

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
    backgroundColor: '#4CAF50',
  },
  tabText: {
    fontSize: 14,
    color: '#666666',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
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

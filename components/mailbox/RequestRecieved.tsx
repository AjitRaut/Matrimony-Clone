import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RequestRecieved = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyState}>
        <Image
           source={{
            uri: 'https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/mailbox/chat-converstion.png',
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.message}>
          You have no requests yet from matches
        </Text>
      </View>
    </View>
  );
};

export default RequestRecieved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
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

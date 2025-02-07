import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AwaitingResponse = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/mailbox/chat-converstion.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>You have no conservations till now </Text>
    </View>
  );
};

export default AwaitingResponse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200, 
    height: 200,
    marginBottom: 20, 
  },
  text: {
    fontSize: 18, 
    fontWeight: "500", 
    color: "#444", 
    textAlign: "center", 
  },
});

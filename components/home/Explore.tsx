import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const data = [
  {
    id: "1",
    image: require("../../assets/images/icon-explore-assisted.png"),
    title: "Assiste Service",
    bgcolor: "#e3e9f5",
  },
  {
    id: "2",
    image: require("../../assets/images/icon-explore-premium.png"),
    title: "Premium Membership",
    bgcolor: "#fae7e5",
  },
  {
    id: "3",
    image: require("../../assets/images/icon-explore-safety.png"),
    title: "Safety & Privacy",
    bgcolor: "#d7eef2",
  },
  {
    id: "4",
    image: require("../../assets/images/icon-explore-retail.png"),
    title: "Retail Stores",
    bgcolor: "#e3e9f5",
  },
  {
    id: "5",
    image: require("../../assets/images/icon-explore-mandap.png"),
    title: "Mandap.com",
    bgcolor: "#e0e9f4",
  },
  {
    id: "6",
    image: require("../../assets/images/icon-explore-wedding.png"),
    title: "Wedding Bazaar.com",
    bgcolor: "#f0e5f1",
  },
  {
    id: "7",
    image: require("../../assets/images/icon-explore-help.png"),
    title: "Help & Support",
    bgcolor: "#dcf1f2",
  },
];

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore BharatMatrimony</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item) => (
          <TouchableOpacity style={styles.card} key={item.id}>
            <View
              style={[styles.imageContainer, { backgroundColor: item.bgcolor }]}
            >
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  scrollContainer: {
    paddingBottom: 10,
    flexDirection: "row",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    padding: 10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    borderRadius: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 12,
    width: 65,
    fontWeight: "500",
    textAlign: "center",
    color: "#555",
  },
});

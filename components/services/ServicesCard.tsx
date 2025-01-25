import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type CardProps = {
  item: {
    id: string;
    title: string | null;
    description: string;
    points: { text: string; icon: JSX.Element }[];
    topImage: any;
    bottomImage: any;
  };
};

const ServicesCard: React.FC<CardProps> = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.topImage} style={styles.topImage} />
    {item.title && <Text style={styles.title}>{item.title}</Text>}
    <Text style={styles.description}>{item.description}</Text>
    <View style={styles.dottedLine} />
    <View style={styles.pointsContainer}>
      {item.points.map((point, index) => (
        <View key={index} style={styles.point}>
          {point.icon}
          <Text style={styles.pointText}>{point.text}</Text>
        </View>
      ))}
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Know More</Text>
    </TouchableOpacity>
    <Image source={item.bottomImage} style={styles.bottomImage} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: "relative",
  },
  topImage: {
    width: "30%",
    marginLeft: -5,
    height: 50,
    resizeMode: "contain",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  dottedLine: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dotted",
    marginVertical: 8,
  },
  pointsContainer: {
    marginBottom: 16,
  },
  point: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  pointText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#e06506",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 8,
    marginLeft: -210,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomImage: {
    width: 70,
    height: 60,
    resizeMode: "contain",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default ServicesCard;

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
    <View style={styles.topImageContainer}>
    <Image source={item.topImage} style={styles.topImage} />
    {item.title && <Text style={styles.title}>{item.title}</Text>}
    </View>
   
    <Text style={styles.description}>{item.description}</Text>
    <View style={styles.dottedLine} />
    <View style={styles.pointsContainer}>
      {item.points.map((point, index) => (
        <View key={index} style={styles.point}>
         <View style={styles.iconContainer}>{point.icon}</View>
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
    padding: 14,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: "relative",
    overflow: "hidden",
  },
  topImageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center", 
    marginBottom: 8,
    width: 100,
    height: 50,
  },
  topImage: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4, 
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
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
  iconContainer: {
    width: 20,
  },
  point: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginBottom: 8,
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
    bottom: -5,
    right: -10,
  },
});

export default ServicesCard;

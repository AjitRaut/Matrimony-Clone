import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
const girlprofile =  require("../../assets/images/girl-profile.png");;

interface MatchCardProps {
  name: string;
  age: number;
  height: string | number;
}

// Functional Component with Props
const MatchCard: React.FC<MatchCardProps> = ({ name, age, height }) => {
  return (
    <TouchableOpacity style={styles.matchCard}>
      <View style={styles.imageContainer}>
        <Image source={girlprofile} style={styles.profileImage} />
      </View>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.detailsText}>
        {age} Yrs, {height}"
      </Text>
    </TouchableOpacity>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  matchCard: {
    width: 150,
    marginRight: 12,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    marginBottom: 8,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 2,
  },
  detailsText: {
    fontSize: 14,
    color: "#666",
  },
});

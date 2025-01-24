import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import FilterBar from "./FilterBar";
import Bootom from "./Bootom";

const data = [
  {
    id: "1",
    name: "Yogeshwari Bhaskar Harne",
    userid: "R1234567",
    age: 21,
    height: "5'5\"",
    location: "xyz",
    qualification: "B.Sc.",
    occupation: "Not Working",
    city: "Ambejogai",
    image: null,
    lastSeen: "yesterday",
  },
];

export default function MatchMaking() {
  const renderCard = ({ item }: { item: (typeof data)[0] }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.image} />
        ) : (
          <Image
            source={require("../../assets/images/girl-profile.png")}
            style={styles.image}
          />
        )}
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.info}>
          {item.userid} | {item.lastSeen}
        </Text>
        <Text style={styles.info}>
          {item.age} Yrs · {item.height} · {item.location}
        </Text>
        <Text style={styles.info}>
          {item.qualification} · {item.occupation} · {item.city}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
          <MaterialIcons name="block" size={24} color="#aaa" />
          <Text style={styles.actionText}>Don't Show</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
          <MaterialIcons name="favorite" size={24} color="#fff" />
          <Text style={[styles.actionText, styles.primaryText]}>
            Send Interest
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <FilterBar />
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
        <Bootom />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: "#777",
    marginBottom: 2,
  },
  lastSeen: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    flexDirection: "row",
    marginTop: 8,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#aaa",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    marginRight: 20,
  },
  primaryButton: {
    backgroundColor: "#f77f00",
    borderWidth: 1,
    borderColor: "#f77f00",
    borderRadius: 30,
  },
  primaryText: {
    color: "#fff",
  },
});

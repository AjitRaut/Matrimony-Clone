import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Match {
  id: string;
  name: string;
  age: number;
  height: string;
  location: string;
  education: string;
  profession: string;
  lastSeen: string;
  profileId: string;
}

const matches: Match[] = [
  {
    id: "2",
    name: "Prajakta",
    age: 25,
    height: "5'5\"",
    location: "Pune",
    education: "M.Sc",
    profession: "Engineer",
    lastSeen: "Last seen yesterday",
    profileId: "R2345678",
  },
];

const AllMatchesScreen: React.FC = () => {
  const renderMatchCard = ({ item }: { item: Match }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150",
          }}
          style={styles.image}
        />
        <View style={styles.photoRequest}>
          <Text style={styles.photoRequestText}>Request her to add photo</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.detailText}>
          {item.profileId} | {item.lastSeen}
        </Text>
        <Text style={styles.detailText}>
          {item.age} Yrs · {item.height} · {item.location} · {item.education} ·{" "}
          {item.profession}
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="phone" size={18} color="#FFA500" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="whatsapp" size={18} color="#25D366" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shortlistButton}>
          <Text style={styles.shortlistText}>Shortlist</Text>
        </TouchableOpacity>
      </View>

      {/* Interest Buttons */}
      <View style={styles.interestContainer}>
        <TouchableOpacity style={styles.dontShowButton}>
          <Text style={styles.dontShowText}>Don't Show</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendInterestButton}>
          <Text style={styles.sendInterestText}>Send Interest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.matchText}>
        {matches.length} Matches based on your{" "}
        <Text style={styles.highlight}>preferences</Text>
      </Text>

      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={renderMatchCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default AllMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  matchText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  highlight: {
    color: "orange",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
  },
  photoRequest: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    borderRadius: 5,
  },
  photoRequestText: {
    fontSize: 12,
    color: "#555",
  },
  detailsContainer: {
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  detailText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginVertical: 2,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  iconButton: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 30,
    elevation: 2,
  },
  shortlistButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ddd",
    borderRadius: 20,
  },
  shortlistText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  interestContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  dontShowButton: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
  },
  sendInterestButton: {
    flex: 1,
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
  },
  dontShowText: {
    color: "#333",
    fontWeight: "bold",
  },
  sendInterestText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

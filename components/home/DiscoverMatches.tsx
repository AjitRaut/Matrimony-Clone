import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const data = [
  {
    id: "1",
    title: "Education",
    count: 1,
    image: {
      uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/card-bg-education.png",
    },
  },
  {
    id: "2",
    title: "Profession",
    count: 5,
    image: {
      uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/card-bg-profession-new.png",
    },
  },
  {
    id: "3",
    title: "Self-created profiles",
    count: 8,
    image: {
      uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/card-bg-byself.png",
    },
  },
  {
    id: "4",
    title: "Profiles with photos",
    count: 1,
    image: {
      uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/discover-card-profile-with-photos-male.png",
    },
  },
];

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 60) / 2;

const DiscoverMatches = () => {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {item.title} ({item.count})
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover Matches</Text>
      <Text style={styles.subHeader}>
        Explore profiles matching your preferences
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default DiscoverMatches;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  list: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    opacity: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    width:"100%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});

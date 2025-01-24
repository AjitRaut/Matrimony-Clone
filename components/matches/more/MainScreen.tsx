import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface MatchCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

interface Section {
  title: string;
  data: MatchCategory[];
}

const sections: Section[] = [
  {
    title: "Based on activity",
    data: [
      {
        id: "1",
        title: "Shortlisted you",
        subtitle: "Matches who have shortlisted your profile",
        icon: <FontAwesome name="star" size={20} color="#FFD700" />, // Gold Star
      },
      {
        id: "2",
        title: "Viewed you",
        subtitle: "Matches who have viewed your profile",
        icon: <FontAwesome name="eye" size={20} color="#000" />, // Eye icon
      },
      {
        id: "3",
        title: "Shortlisted by you",
        subtitle: "Matches you have shortlisted",
        icon: <FontAwesome name="star-o" size={20} color="#FFD700" />, // Outline star
      },
      {
        id: "4",
        title: "Viewed by you",
        subtitle: "Matches you have viewed",
        icon: <FontAwesome name="eye-slash" size={20} color="#888" />, // Eye slash icon
      },
    ],
  },
  {
    title: "Recently joined & nearby matches",
    data: [
      {
        id: "5",
        title: "Newly joined",
        subtitle: "Matches who joined within the last 30 days",
        icon: <MaterialCommunityIcons name="account-plus" size={20} color="#4CAF50" />, // Account plus
      },
      {
        id: "6",
        title: "Nearby matches",
        subtitle: "Matches near your location",
        icon: <MaterialCommunityIcons name="map-marker" size={20} color="#FF5722" />, // Map marker
      },
    ],
  },
  {
    title: "Based on profile details",
    data: [
      {
        id: "7",
        title: "Matches with photos",
        subtitle: "Matches that have added photos",
        icon: <MaterialCommunityIcons name="image" size={20} color="#3F51B5" />, // Image icon
      },
      {
        id: "8",
        title: "Matches with horoscope",
        subtitle: "Matches that have added horoscope",
        icon: <MaterialCommunityIcons name="star-outline" size={20} color="#FFC107" />, // Star outline
      },
    ],
  },
  {
    title: "Based on astrological compatibility",
    data: [
      {
        id: "9",
        title: "Star matches",
        subtitle: "Matches with compatible star sign",
        icon: <FontAwesome name="star-half-full" size={20} color="#FF9800" />, // Half star
      },
      {
        id: "10",
        title: "Horoscope matches",
        subtitle: "Matches with horoscope matching yours",
        icon: <MaterialCommunityIcons name="zodiac-scorpio" size={20} color="#E91E63" />, // Zodiac icon
      },
    ],
  },
  {
    title: "Members who are looking for someone like you",
    data: [
      {
        id: "11",
        title: "Mutual matches",
        subtitle: "Matches whose profile match your preferences and vice versa",
        icon: <FontAwesome name="heart" size={20} color="#F44336" />, // Heart icon
      },
      {
        id: "12",
        title: "Looking for you",
        subtitle: "Matches whose preferences match your profile",
        icon: <MaterialCommunityIcons name="magnify" size={20} color="#9C27B0" />, // Search icon
      },
    ],
  },
  {
    title: "Matches based on preferences",
    data: [
      {
        id: "13",
        title: "Education preference",
        subtitle: "Matches based on your preferred education",
        icon: <MaterialCommunityIcons name="school" size={20} color="#3E2723" />, // School icon
      },
      {
        id: "14",
        title: "Professional preference",
        subtitle: "Matches based on your preferred profession",
        icon: <MaterialCommunityIcons name="briefcase" size={20} color="#607D8B" />, // Briefcase icon
      },
      {
        id: "15",
        title: "City/location preference",
        subtitle: "Matches based on your preferred city/location",
        icon: <MaterialCommunityIcons name="city" size={20} color="#795548" />, // City icon
      },
    ],
  },
  {
    title: "Other matches",
    data: [
      {
        id: "16",
        title: "Assisted matches",
        subtitle: "Matches whose profiles are handled by a relationship manager",
        icon: <MaterialCommunityIcons name="account-check" size={20} color="#4CAF50" />, 
      },
    ],
  },
];

const MatchScreen = () => {
  const renderItem = ({ item }: { item: MatchCategory }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={20} style={{ marginLeft: "auto" }} color="#aaa" />
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }: { section: Section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={sections.flatMap((section) => section.data)}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={() =>
        sections.map((section, index) => (
          <View key={index}>
            {renderSectionHeader({ section })}
            {section.data.map((item) => renderItem({ item }))}
          </View>
        ))
      }
    />
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  iconContainer: {
    marginRight: 15,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#f5f5f5",
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  itemSubtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
    width:200
  },
});

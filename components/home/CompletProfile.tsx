import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

interface TabContentProps {}

interface TabData {
  title: string;
  description: string;
  buttonText: string;
}

const CompletProfile: React.FC<TabContentProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: string[] = [
    "Add Photo",
    "Add Horoscope",
    "Family Details",
    "Interest",
  ];

  const content: TabData[] = [
    {
      title: "Add Photo",
      description: "Your photo is the first thing that your matches look at.",
      buttonText: "Add Photo",
    },
    {
      title: "Add Horoscope",
      description:
        "View horoscope compatible matches by adding your time and place of birth.",
      buttonText: "Generate Horoscope",
    },
    {
      title: "Family Details",
      description:
        "Add your family details to improve the chances of finding matches.",
      buttonText: "Add Details",
    },
    {
      title: "Interest",
      description: "Add your interests to find better compatibility matches.",
      buttonText: "Add Interest",
    },
  ];

  const handleTabPress = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={tabs}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.tabItem,
              activeTab === index && styles.activeTabItem,
            ]}
            onPress={() => handleTabPress(index)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === index && styles.activeTabText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Swiper
        index={activeTab}
        onIndexChanged={(index: number) => setActiveTab(index)}
        loop={false}
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {content.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default CompletProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  tabItem: {
    marginRight: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTabItem: {
    borderBottomColor: "#4caf50",
  },
  tabText: {
    fontSize: 14,
    color: "#888",
  },
  activeTabText: {
    color: "#4caf50",
    fontWeight: "bold",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ff6f00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "#ddd",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#ff6f00",
  },
});

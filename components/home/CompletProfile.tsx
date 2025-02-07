import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

interface TabData {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const CompleteProfile: React.FC = () => {
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
      image:
        "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-photo-male.png",
    },
    {
      title: "Add Horoscope",
      description:
        "View horoscope compatible matches by adding your time and place of birth.",
      buttonText: "Generate Horoscope",
      image:
        "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/generate-horoscope-male.png",
    },
    {
      title: "Family Details",
      description:
        "Let matches know your family better by adding your family details.",
      buttonText: "Add Family Details",
      image:
        "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-family-details.png",
    },
    {
      title: "Interest",
      description: "Add your interests to find better compatibility matches.",
      buttonText: "Add Interest",
      image:
        "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-institution-details.png",
    },
  ];

  const handleTabPress = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Complete Your Profile</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
          <Text style={styles.progressText}>
            Profile completeness score 30%
          </Text>
        </View>
      </View>

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
          <ImageBackground
            key={index}
            source={{ uri: item.image }}
            style={styles.slide}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{item.buttonText}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  headerContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ff6f00",
    width: "30%",
    borderRadius: 4,
  },
  progressText: {
    marginTop: 4,
    fontSize: 12,
    color: "#888",
  },
  tabContainer: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTabItem: {
    borderBottomColor: "#ff6f00",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "#ff6f00",
    fontWeight: "bold",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ff6f00",
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 5,
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

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileActionsCard = () => {
  const handleAddPhoto = () => {
    // Implement photo upload logic
    console.log("Add photo pressed");
  };

  const handleDownloadBiodata = () => {
    // Implement biodata download logic
    console.log("Download biodata pressed");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.photoSection]}>
        <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={24}
              color="#666"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Add photo to get 10 times</Text>
            <Text style={styles.mainText}>more response</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddPhoto}>
          <Text style={styles.buttonText}>Add Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Biodata Section */}
      <View style={[styles.section, styles.biodataSection]}>
        <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="file-document-outline"
              size={24}
              color="#4CAF50"
            />
          </View>
          <Text style={styles.mainText}>Download & share your biodata</Text>
        </View>
        <TouchableOpacity
          style={[styles.downloadButton]}
          onPress={handleDownloadBiodata}
        >
          <Text style={[styles.buttonText, styles.downloadButtonText]}>
            Download
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 7,
    paddingVertical: 8,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 2,
  },
  photoSection: {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  biodataSection: {
    backgroundColor: "#FFF8E1",
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  mainText: {
    fontSize: 14,
    color: "#333",
    flexShrink: 1,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E65100",
  },
  buttonText: {
    color: "#E65100",
    fontSize: 14,
    fontWeight: "500",
  },
  downloadButton: {
    marginLeft: 12,
  },
  downloadButtonText: {
    color: "#E65100",
  },
});

export default ProfileActionsCard;

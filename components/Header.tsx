import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import RegularPrime from "./RegularPrime";
const proifle = require("./../assets/images/profile-banner.png");

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <RegularPrime />

      <View style={styles.profileSection}>
        <View style={styles.profileLeft}>
          <View style={styles.avatarContainer}>
            <TouchableOpacity style={styles.cameraBtn}>
              <MaterialIcons name="photo-camera" size={15} color="#000" />
            </TouchableOpacity>
            <View style={styles.avatar}>
              <Image source={proifle} style={styles.image} />
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Ajitraut</Text>
            <View style={styles.membershipRow}>
              <Text style={styles.memberStatus}>Free Member</Text>
              <TouchableOpacity style={styles.upgradeBtn}>
                <Text style={styles.upgradeTxt}>Upgrade</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.profileRight}>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuBtn}>
            <MaterialIcons name="menu" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    position: "relative",
    width: 60,
    height: 60,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
  },
  cameraBtn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    padding: 2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    zIndex: 1,
  },
  userInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  membershipRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    gap: 8,
  },
  memberStatus: {
    fontSize: 12,
    color: "#666",
  },
  upgradeBtn: {
    backgroundColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF6B00",
  },
  upgradeTxt: {
    color: "#FF6B00",
    fontSize: 10,
    fontWeight: "500",
  },
  profileRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationBtn: {
    marginRight: 15,
  },
  menuBtn: {
    padding: 3,
  },
});

export default ProfileHeader;

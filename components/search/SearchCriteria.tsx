import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SearchMatches from "./SearchMatches";

const SearchCriteria: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>
        Search profiles using the below criteria
      </Text>

      {/* Section: Basic Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Details</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Age</Text>
          <View style={styles.rowRight}>
            <Text style={styles.value}>18 Yrs - 21 Yrs</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Height</Text>
          <View style={styles.rowRight}>
            <Text style={styles.value}>4'7" - 5'7"</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Profile created by</Text>
          <View style={styles.rowRight}>
            <Text style={styles.value}>Any</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>

      {/* Section: Religious Details */}
      <View style={[styles.section ,{ marginTop: 10 }]}>
        <Text style={styles.sectionTitle}>Religious Details</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Religion</Text>
          <View style={styles.rowRight}>
            <Text style={styles.value}>Hindu</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>Caste</Text>
          <View style={styles.rowRight}>
            <Text style={styles.valueWithLink}>Xyz, Bajantri, Nai...</Text>
            <Text style={styles.readMore}>Read more</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.lockedSection}>
        <MaterialIcons name="lock-outline" size={24} color="#f47216" />
        <Text style={styles.lockedText}>
          To access these premium filters,{" "}
          <Text style={styles.upgradeLink}>Upgrade Now</Text>
        </Text>
      </View>
      <SearchMatches/>

    </ScrollView>
  );
};

export default SearchCriteria;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  heading: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  section: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 14,
    color: "#000",
    marginRight: 5,
  },
  valueWithLink: {
    flexDirection: "row",
    fontSize: 14,
    color: "#000",
    marginRight: 5,
  },
  readMore: {
    color: "#f47216",
    textDecorationLine: "underline",
  },
  viewMore: {
    fontSize: 14,
    color: "#f47216",
    marginTop: 10,
    fontWeight: "500",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  lockedSection: {
    alignItems: "center",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "center",
  },
  lockedText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 10,
  },
  upgradeLink: {
    color: "#f47216",
    fontWeight: "600",
  },
});

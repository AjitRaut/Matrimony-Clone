import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const SuccessStoryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's Success Story</Text>
        <Text style={styles.date}>15 Jan 2025</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.contentRow}>
          <Image
            source={{
              uri: "https://bh-imgs.matrimonycdn.com/successphoto/marathi/5/1/R5113905_SUCCESS_TS.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.textContent}>
            <Text style={styles.names}>
              Ganesh borude & Priyanka
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              <Text>
                Thank you matrimony! I
              </Text>
              <Text>
                met Priyanka through...
              </Text>
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.readMore}>Read more...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.viewMoreButton} onPress={() => {}}>
        <Text style={styles.viewMoreText}>View more success stories</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Millions of Happy Marriages</Text>
        <Text style={styles.footerText}>
          We are featured in the Limca Book of Records for highest number of
          documented marriages online
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 16,
    backgroundColor: "#fcf9f1",
  },
  header: {
    marginBottom: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  date: {
    fontSize: 16,
    color: "#666",
  },
  cardContainer: {
    backgroundColor: "#fcf9f1",
    borderRadius: 12,
    padding: 12,
  },
  contentRow: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  textContent: {
    flex: 1,
    justifyContent: "center",
  },
  names: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  readMore: {
    color: "#E67E22",
    fontSize: 14,
  },
  viewMoreButton: {
    width: "60%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#E67E22",
    borderRadius: 25,
    padding: 7,
    alignItems: "center",
    margin: "auto",
  },
  viewMoreText: {
    color: "#E67E22",
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#faf4e5",
    marginTop: 24,
    paddingHorizontal: 10,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  footerText: {
    fontSize: 13,
    color: "#444",
    lineHeight: 24,
  },
});

export default SuccessStoryCard;
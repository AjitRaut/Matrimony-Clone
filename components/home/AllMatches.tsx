import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MatchCard from './MatchCard';



const AllMatches = () => {
  const matches = [
    { id: 1, name: 'Prajakta', age: 21, height: "5'0" },
    { id: 2, name: 'Later', age: 21, height: "5'6" },
    { id: 3, name: 'Aarti Jadh', age: 20, height: "5'2" },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>All matches</Text>
          <Text style={styles.matchCount}>({matches.length})</Text>
        </View>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color="#E65100" />
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Members who match your partner preferences
      </Text>

      {/* Matches Grid */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.matchesContainer}
      >
        {matches.map((match) => (
          <MatchCard 
            key={match.id}
            name={match.name}
            age={match.age}
            height={match.height}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  matchCount: {
    fontSize: 18,
    color: '#666',
    marginLeft: 4,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#E65100',
    fontSize: 14,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  matchesContainer: {
    paddingLeft: 16,
  },
  matchCard: {
    width: 150,
    marginRight: 12,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  detailsText: {
    fontSize: 14,
    color: '#666',
  },
});

export default AllMatches;
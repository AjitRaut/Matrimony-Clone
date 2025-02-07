import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RecentlyJoinedNearbyMatches: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently joined & nearby matches</Text>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <View style={styles.iconContainer}>
            <Ionicons name="people" size={24} color="#000" />
          </View>
          <Text style={styles.itemText}>Newly joined</Text>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.iconContainer}>
            <Ionicons name="location" size={24} color="#000" />
          </View>
          <Text style={styles.itemText}>Nearby matches</Text>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 24,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
  },
});

export default RecentlyJoinedNearbyMatches;
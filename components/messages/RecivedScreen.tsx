import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AssistedService from './AssistedService';
import { MaterialIcons } from '@expo/vector-icons';

const ReceivedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Incoming messages from paid members</Text>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="filter-list" size={20} color="#666" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <AssistedService />
    </View>
  );
};

export default ReceivedScreen;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    width: '60%',
  },
  filterButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterText: {
    marginLeft: 8,
    color: '#666',
  },
});
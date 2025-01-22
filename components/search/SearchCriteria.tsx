import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SearchCriteria = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Search profiles using the below criteria</Text>

      {/* Basic Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.value}>18 Yrs - 21 Yrs</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Height</Text>
          <Text style={styles.value}>4'7" - 5'7"</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Profile created by</Text>
          <Text style={styles.value}>Any</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>

      {/* Religious Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Religious Details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Religion</Text>
          <Text style={styles.value}>Hindu</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Caste</Text>
          <Text style={styles.value}>Nhavi, Bajantri, Nai...</Text>
        </View>

        <TouchableOpacity style={styles.lockedRow}>
          <Text style={styles.lockedText}>To access these premium filters, </Text>
          <Text style={styles.upgrade}>Upgrade Now</Text>
        </TouchableOpacity>
      </View>

      {/* Matches Section */}
      <Text style={styles.matchesText}>12 matches based on your preferences</Text>

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  viewMore: {
    marginTop: 10,
    fontSize: 14,
    color: '#007bff',
    textAlign: 'right',
  },
  lockedRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockedText: {
    fontSize: 14,
    color: '#555',
  },
  upgrade: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff4500',
  },
  matchesText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 12,
  },
  searchButton: {
    backgroundColor: '#ff4500',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchCriteria;

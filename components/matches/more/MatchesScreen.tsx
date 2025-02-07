import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MatchesScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Star matches</Text>
        <TouchableOpacity style={styles.matchItem}>
          <Text style={styles.matchText}>Matches with compatible star sign</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Horoscope matches</Text>
        <TouchableOpacity style={styles.matchItem}>
          <Text style={styles.matchText}>Matches with horoscope matching yours</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Members who are looking for someone like you</Text>
        <TouchableOpacity style={styles.matchItem}>
          <Text style={styles.matchText}>Matches whose profile match your preferences</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.matchItem}>
          <Text style={styles.matchText}>Matches whose preferences match your profile</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Matches based on preferences</Text>
        <TouchableOpacity style={styles.matchItem}>
          <Text style={styles.matchText}>Matches based on your preferred education</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.matchItem}>
          <Text style={styles.matchText}>Matches based on your preferred profession</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.matchItem}>
          <Text style={styles.matchText}>Matches based on your preferred city/location</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other matches</Text>
        <TouchableOpacity style={styles.matchItem}>
          <Text style={styles.matchText}>Matches whose profiles are handled by a relationship manager</Text>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  matchText: {
    fontSize: 14,
    flex: 1,
    marginRight: 16,
  },
});

export default MatchesScreen;
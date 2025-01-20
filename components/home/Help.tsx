import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Help = () => {
  return (
    <View style={styles.card}>
      <MaterialIcons name="help-outline" size={24} color="#43A047" style={styles.icon} />
      <Text style={styles.text}>
        <Text style={styles.boldText}>Need Help? </Text>
        Reach out to us with your queries!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 16,
  },
  icon: {
    marginRight: 12,
  },
  text: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Help;

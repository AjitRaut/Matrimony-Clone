import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AstrologicalCompatibilityMatches: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Based on astrological compatibility</Text>
      <TouchableOpacity style={styles.item}>
        <View style={styles.iconContainer}>
          {/* <Image
            source={require('./assets/zodiac.png')}
            style={styles.zodiacIcon}
          /> */}
        </View>
        <Text style={styles.itemText}>Star matches</Text>
        <View style={styles.disabledContainer}>
          <Ionicons name="close" size={24} color="#ccc" />
        </View>
      </TouchableOpacity>
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  zodiacIcon: {
    width: 24,
    height: 24,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
  },
  disabledContainer: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: '#f2f2f2',
  },
});

export default AstrologicalCompatibilityMatches;
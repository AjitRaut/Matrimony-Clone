import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CallsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calls Content</Text>
    </View>
  );
};

export default CallsScreen;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});
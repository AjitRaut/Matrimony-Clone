import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HoroscopeUpgrade = () => {
  const handleUpgrade = () => {
    console.log('Upgrade pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.horizontalContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons 
              name="earth" 
              size={40} 
              color="#A78BFA"
            />
            <View style={styles.restrictedIcon}>
              <MaterialCommunityIcons 
                name="block-helper" 
                size={20} 
                color="#FF4757"
              />
            </View>
          </View>

          <View style={styles.textAndButtonContainer}>
            <Text style={styles.messageText}>
              As a free member, you are unable to view & match horoscopes.
            </Text>

            <TouchableOpacity 
              style={styles.upgradeButton}
              onPress={handleUpgrade}
            >
              <Text style={styles.upgradeButtonText}>
                Upgrade to view horoscopes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative',
    marginRight: 16,
  },
  restrictedIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
  },
  textAndButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 8,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 12,
    lineHeight: 24,
  },
  upgradeButton: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
    width: '100%',
  },
  upgradeButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HoroscopeUpgrade;

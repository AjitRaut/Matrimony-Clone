import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const AssistedService = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/images/assisted-logo.png')} // You'll need to add your logo image
          style={styles.logo} 
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>Assisted Service</Text>
          <Text style={styles.subtitle}>Personalised matchmaking service</Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.textContent}>
          <Text style={styles.findMatch}>
            Find your match <Text style={styles.faster}>10x faster</Text>
          </Text>
          
          <Text style={styles.description}>
            Personalized matchmaking service through expert Relationship Manager
          </Text>

          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <View style={styles.checkCircle}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
              <Text style={styles.benefitText}>Guaranteed matches</Text>
            </View>
            
            <View style={styles.benefitItem}>
              <View style={styles.checkCircle}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
              <Text style={styles.benefitText}>Better response</Text>
            </View>
            
            <View style={styles.benefitItem}>
              <View style={styles.checkCircle}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
              <Text style={styles.benefitText}>Save time & effort</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.knowMoreButton}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Know more</Text>
          </TouchableOpacity>
        </View>

        {/* <Image 
          source={require('../assets/manager.png')} // You'll need to add your manager image
          style={styles.managerImage}
          resizeMode="contain"
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#E8FFF1',
    padding: 20,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#333333',
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  textContent: {
    flex: 1,
    paddingRight: 20,
  },
  findMatch: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  faster: {
    color: '#00875A',
  },
  description: {
    fontSize: 20,
    color: '#333333',
    marginBottom: 25,
    lineHeight: 28,
  },
  benefitsList: {
    marginBottom: 20,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00875A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  benefitText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
  },
  knowMoreButton: {
    backgroundColor: '#E65D11',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  managerImage: {
    width: 300,
    height: 400,
    position: 'absolute',
    right: 0,
    bottom: -20,
  },
});

export default AssistedService;
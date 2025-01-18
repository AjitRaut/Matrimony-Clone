import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const TalkToAstrologer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newFeatureBadge}>
        <Text style={styles.newFeatureText}>✨ New Feature</Text>
      </View>

      <Text style={styles.title}>Talk to Astrologer</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.atText}>at </Text>
        <Text style={styles.oldPrice}>₹399</Text>
        <Text style={styles.newPrice}> ₹179 </Text>
        <Text style={styles.onlyText}>only!</Text>
      </View>

      <Text style={styles.consultationText}>
        Book first consultation for 15 minutes now!
      </Text>

      <View style={styles.benefitsList}>
        <View style={styles.benefitItem}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
          <Text style={styles.benefitText}>
            Get insights about your life before and after marriage.
          </Text>
        </View>

        <View style={styles.benefitItem}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
          <Text style={styles.benefitText}>
            Get guidance on finding a life partner, doshams if any and remedies.
          </Text>
        </View>

        <View style={styles.benefitItem}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
          <Text style={styles.benefitText}>
            Check your horoscope compatibility with matching profiles.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.bookNowButton} onPress={() => {}}>
        <Text style={styles.buttonText}>Book now</Text>
      </TouchableOpacity>

      {/* <Image
        source={require('../assets/astrologer.png')} // You'll need to add your astrologer image
        style={styles.astrologerImage}
        resizeMode="contain"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: 16,
    
  },
  newFeatureBadge: {
    position: 'absolute',
    top: -15,
    left: -5,
    backgroundColor: '#FF0000',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  newFeatureText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  atText: {
    fontSize: 24,
  },
  oldPrice: {
    fontSize: 24,
    textDecorationLine: 'line-through',
    color: '#666',
  },
  newPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  onlyText: {
    fontSize: 24,
  },
  consultationText: {
    fontSize: 20,
    marginBottom: 20,
  },
  benefitsList: {
    marginBottom: 20,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2E8B57',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 3,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  benefitText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  bookNowButton: {
    backgroundColor: '#DC143C',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  astrologerImage: {
    width: 200,
    height: 200,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default TalkToAstrologer;
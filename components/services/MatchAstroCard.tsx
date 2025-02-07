import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MatchAstroCard = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <View
      style={styles.card}
      onTouchStart={() => setShowButton(true)} // Reveal the button on interaction
    >
      <Text style={styles.title}>
        <Text style={{ color: '#FC6B6B' }}>Match</Text>
        <Text style={{ color: '#000' }}>Astro</Text>.com
      </Text>
      <Text style={styles.subtitle}>
        Exclusive astrology app for Love, Relationship and Marriage
      </Text>
      <View style={styles.features}>
        <Feature
          icon="psychology"
          text="Consult top astrologers and get guidance on finding your partner"
        />
        <Feature
          icon="trending-up"
          text="Speed up your matchmaking process"
        />
        <Feature
          icon="favorite"
          text="Horoscope compatibility with matching prospects"
        />
      </View>
      <View style={styles.astroRow}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/40x40', // Replace with actual astrologer image URLs
          }}
          style={styles.astroImage}
        />
        <Image
          source={{
            uri: 'https://via.placeholder.com/40x40',
          }}
          style={styles.astroImage}
        />
        <Image
          source={{
            uri: 'https://via.placeholder.com/40x40',
          }}
          style={styles.astroImage}
        />
        <Text style={styles.astroText}>Top astrologers to choose from</Text>
      </View>
      {showButton && ( // Show button only when `showButton` is true
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Feature = ({ icon, text }: { icon: string; text: string }) => (
  <View style={styles.feature}>
    {/* <MaterialIcons name={icon} size={20} color="#FC6B6B" /> */}
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  features: {
    marginBottom: 16,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  astroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  astroImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  astroText: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#FC6B6B',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MatchAstroCard;

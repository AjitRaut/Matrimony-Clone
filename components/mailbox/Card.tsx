import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from './Button';

interface CardProps {
  name: string;
  age: string;
  height: string;
  caste: string;
  education: string;
  profession: string;
  location: string;
  joined: boolean;
  acceptedDate?: string;
  onMessagePress: () => void;
  onCallPress: () => void;
}

const Card: React.FC<CardProps> = ({
  name,
  age,
  height,
  caste,
  education,
  profession,
  location,
  joined,
  acceptedDate,
  onMessagePress,
  onCallPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          {joined && (
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEWLY JOINED</Text>
            </View>
          )}
          {/* <Image
            source={require('./assets/profile_placeholder.png')} // Replace with actual path
            style={styles.profileImage}
          /> */}
        </View>

        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subDetails}>
            {age} · {height} · {caste} · {education} · {profession} · {location}
          </Text>
          {acceptedDate && (
            <Text style={styles.acceptedText}>
              She accepted your interest - {acceptedDate}
            </Text>
          )}
        </View>

        {/* Options */}
        <TouchableOpacity>
          <Text style={styles.options}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          title="Send Message"
          onPress={onMessagePress}
          style={styles.messageButton}
          textStyle={styles.messageButtonText}
        />
        <Button
          title="Call Now"
          onPress={onCallPress}
          style={styles.callButton}
          textStyle={styles.callButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
  },
  newBadge: {
    position: 'absolute',
    top: -10,
    left: -10,
    backgroundColor: '#f1c40f',
    padding: 4,
    borderRadius: 4,
  },
  newBadgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subDetails: {
    fontSize: 12,
    color: '#666',
    marginVertical: 4,
  },
  acceptedText: {
    fontSize: 12,
    color: '#28a745',
  },
  options: {
    fontSize: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  messageButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    backgroundColor: '#fff',
    marginRight: 8,
  },
  messageButtonText: {
    color: '#007bff',
  },
  callButton: {
    backgroundColor: '#ff4500',
    marginLeft: 8,
  },
  callButtonText: {
    color: '#fff',
  },
});

export default Card;

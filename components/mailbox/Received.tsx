import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Card from './Card';
import FilterBar from '../matches/FilterBar';
import Filterbar from './Filterbar';

const interestsData = [
  {
    id: '1',
    name: 'Prajakta',
    age: '21 yrs',
    height: '5\'0"',
    caste: 'Nhavi',
    education: 'B.A.',
    profession: 'Beautician',
    location: 'Vita',
    joined: true,
    acceptedDate: '16 Jan 25',
    status: 'accepted',
  },
  {
    id: '2',
    name: 'Sneha',
    age: '23 yrs',
    height: '5\'3"',
    caste: 'Maratha',
    education: 'M.A.',
    profession: 'Teacher',
    location: 'Pune',
    joined: false,
    acceptedDate: '',
    status: 'pending',
  },
  {
    id: '3',
    name: 'Aditi',
    age: '22 yrs',
    height: '5\'2"',
    caste: 'Brahmin',
    education: 'B.Com.',
    profession: 'Accountant',
    location: 'Mumbai',
    joined: false,
    acceptedDate: '',
    status: 'declined',
  },
];

const InterestsScreen = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'accepted' | 'declined'>('all');

  const filteredData = interestsData.filter((item) =>
    activeTab === 'all' ? true : item.status === activeTab
  );

  return (
    <View style={styles.container}>
      {/* Tab Bar */}
      <View style={styles.tabContainer}>
        {['all', 'pending', 'accepted', 'declined'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            onPress={() => setActiveTab(tab as any)}
          >
            <Text
              style={[styles.tabText, activeTab === tab && styles.activeTabText]}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

<Filterbar/>
      {filteredData.length > 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={{
              uri: 'https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/mailbox/chat-converstion.png',
            }}
            style={styles.image}
          />
          <Text style={styles.emptyText}>No Conservation Till Now</Text>
          <Text style={styles.emptyText}>All incoming messages/interests and responses will be shown here</Text>
        </View>
      ) : (
        <View style={styles.dataContainer}>
          {filteredData.map((item) => (
            <Card
              key={item.id}
              {...item}
              onMessagePress={() => alert(`Message ${item.name}`)}
              onCallPress={() => alert(`Call ${item.name}`)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF5EF',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    fontSize: 14,
    color: '#666666',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
  dataContainer: {
    flex: 1,
    padding: 10,
  },
});

export default InterestsScreen;

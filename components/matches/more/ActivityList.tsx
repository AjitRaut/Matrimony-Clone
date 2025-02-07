import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ActivityCard from "./ActivityCard";

interface ActivityListProps {
  data: {
    title: string;
    description: string;
    icon: string;
  }[];
  onItemPress: (index: number) => void;
}

const ActivityList: React.FC<ActivityListProps> = ({ data, onItemPress }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <ActivityCard
          title={item.title}
          description={item.description}
          icon={item.icon}
          onPress={() => onItemPress(index)}
        />
      )}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#e5e5e5",
  },
});

export default ActivityList;

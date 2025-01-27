import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ServicesScreen from "@/components/services/ServiceScreen";
import ServiceHeader from "@/components/services/ServiceHeader";
import OurServices from "@/components/services/OurServices";
import WantToMore from "@/components/services/WantToMore";

const Services = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ServiceHeader />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <ServicesScreen />
        <WantToMore />
        <OurServices />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f7f8",
    paddingTop: 10,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

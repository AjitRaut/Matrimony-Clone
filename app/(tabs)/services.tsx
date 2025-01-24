import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ServicesScreen from "@/components/services/ServiceScreen";
import WeddingLoanCard from "@/components/services/WddingLoanCard";
import WeddingGiftBox from "@/components/services/WeddingGiftBox";
import WeddingBazaarCard from "@/components/services/WddingBazaarCard";
import MandapCard from "@/components/services/MandapCard";
import ServiceHeader from "@/components/services/ServiceHeader";
import EliteMatrimonyCard from "@/components/services/EliteMatrimonyCard";
import CommunityCard from "@/components/services/CommunityCard";
import AssistedCard from "@/components/services/AssistedCard";
import MatchAstroCard from "@/components/services/MatchAstroCard";

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
        <CommunityCard />
        <AssistedCard />
        <EliteMatrimonyCard />
        <MatchAstroCard />
        <WeddingBazaarCard />
        <MandapCard />
        <WeddingLoanCard />
        <WeddingGiftBox />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import ProfileActionsCard from "@/components/home/ProfileActionsCard";
import WelcomeOffer from "@/components/home/WelcomeOffer";
import HoroscopeUpgrade from "@/components/home/HoroscopeUpgrade";
import AllMatches from "@/components/home/AllMatches";
import CompletProfile from "@/components/home/CompletProfile";
import DiscoverMatches from "@/components/home/DiscoverMatches";
import Explore from "@/components/home/Explore";
import SuccessStoryCard from "@/components/home/SuccessStory";
import AssistedService from "@/components/home/AssistanceService";
import TalkToAstrologer from "@/components/home/TalkAstrologer";
import WeddingBazaar from "@/components/home/WeddingBazzar";
import Help from "@/components/home/Help";
import MutualMatches from "@/components/home/MutualMatches";

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <ProfileActionsCard />
        <WelcomeOffer />
        <HoroscopeUpgrade />
        <AllMatches />
        <MutualMatches />
        <CompletProfile />
        <DiscoverMatches />
        <Explore />
        <SuccessStoryCard />
        <AssistedService />
        <TalkToAstrologer />
        <WeddingBazaar />
        <Help />
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#eee",
  },
});

import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ServicesCard from "./ServicesCard";
import { FontAwesome5 } from "@expo/vector-icons";

const cardData = [
  {
    id: "1",
    title: "CommunityMatrimony.com",
    description:
      "The largest and most exclusive matrimony service for your community",
    points: [
      {
        text: "More than 2 lakh+ success stories",
        icon: <FontAwesome5 name="users" size={16} color="#A10A31" />,
      },
      {
        text: "Exclusive for your community",
        icon: <FontAwesome5 name="star" size={16} color="#A10A31" />,
      },
      {
        text: "100% verified profiles",
        icon: <FontAwesome5 name="lock" size={16} color="#A10A31" />,
      },
    ],
    topImage: require("../../assets/images/services/CommunityLogo (1).png"),
    bottomImage: require("../../assets/images/services/community-matrimony (1).png"),
  },
  {
    id: "2",
    title: "Assisted Service",
    description: "Personalised matchmaking service that offers",
    points: [
      {
        text: "Dedicated Relationship Manager to shortlist and share matches based on your preferences",
        icon: <FontAwesome5 name="users" size={16} color="#A10A31" />,
      },
      {
        text: "100% verified profiles",
        icon: <FontAwesome5 name="star" size={16} color="#A10A31" />,
      },
      {
        text: "3x faster matchmaking",
        icon: <FontAwesome5 name="lock" size={16} color="#A10A31" />,
      },
    ],
    topImage: require("../../assets/images/assisted-logo.png"),
    bottomImage: require("../../assets/images/assisted-logo.png"),
  },
  {
    id: "3",
    title: "Elite Matrimony",
    description: "The largest & most successful matrimony service for elite",
    points: [
      {
        text: "Served over 50,000 Elite customers",
        icon: <FontAwesome5 name="users" size={16} color="#A10A31" />,
      },
      {
        text: "Exclusive base of elite members",
        icon: <FontAwesome5 name="star" size={16} color="#A10A31" />,
      },
      {
        text: "100% confidential service",
        icon: <FontAwesome5 name="lock" size={16} color="#A10A31" />,
      },
      {
        text: "Dedicated relationship manager",
        icon: <FontAwesome5 name="headphones-alt" size={16} color="#A10A31" />,
      },
    ],
    topImage: require("../../assets/images/services/EliteLogo.png"),
    bottomImage: require("../../assets/images/services/elite-matrimony (2).png"),
  },
  {
    id: "4",
    title: "MatchAstro.com",
    description: "Exclusive astrology app for Love, Relationship and Marriage",
    points: [
      {
        text: "Consult top astrologers and get guidance on finding your partner",
        icon: <FontAwesome5 name="user-tie" size={16} color="#A10A31" />,
      },
      {
        text: "Speed up your matchmaking process",
        icon: <FontAwesome5 name="bolt" size={16} color="#A10A31" />,
      },
      {
        text: "Horoscope compatibility with matching prospects",
        icon: <FontAwesome5 name="heart" size={16} color="#A10A31" />,
      },
    ],
    topImage: require("../../assets/images/services/MatchAstroLogo.png"),
    bottomImage: require("../../assets/images/services/elite-matrimony (2).png"),
  },
  {
    id: "5",
    title: null,
    description: "India's Largest wedding Planning Platform",
    points: [
      {
        text: "Photographers, Makeup artists, Caterers and more. Hire best vendors!",
        icon: <FontAwesome5 name="user-tie" size={16} color="#A10A31" />,
      },
      {
        text: "Trusted wedding market place from matrimony.com group",
        icon: <FontAwesome5 name="bolt" size={16} color="#A10A31" />,
      },
      {
        text: "2.8 Lakh+ trusted vendors across 40+ cities",
        icon: <FontAwesome5 name="heart" size={16} color="#A10A31" />,
      },
    ],
    topImage: require("../../assets/images/services/WeddingBazaarLogo.png"),
    bottomImage: require("../../assets/images/services/wedding-bazaar.png"),
  },
  {
    id: "6",
    title: null,
    description: "IIndia's Largest wedding Venue Booking Platform",
    points: [
      {
        text: "Free assistance in finding your venue",
        icon: <FontAwesome5 name="user-tie" size={16} color="#A10A31" />,
      },
      {
        text: "100% verified venues",
        icon: <FontAwesome5 name="bolt" size={16} color="#A10A31" />,
      },
      {
        text: "40,000+ venues",
        icon: <FontAwesome5 name="heart" size={16} color="#A10A31" />,
      },
    ],
    topImage: require("../../assets/images/services/MandapLogo.png"),
    bottomImage: require("../../assets/images/services/mandap.png"),
  },
  {
    id: "7",
    title: null,
    description: "Quick and hassle free wedding loan",
    points: [
      {
        text: "Dedicated relationship manager",
        icon: <FontAwesome5 name="user-tie" size={16} color="#A10A31" />,
      },
      {
        text: "Discount on processing fee",
        icon: <FontAwesome5 name="bolt" size={16} color="#A10A31" />,
      },
      {
        text: "Save big with popular brand vouchers",
        icon: <FontAwesome5 name="heart" size={16} color="#A10A31" />,
      },
    ],
    topImage: require("../../assets/images/services/WeddingLoanLogo-New.png"),
    bottomImage: require("../../assets/images/services/wedding-loan.png"),
  },
  {
    id: "8",
    title: null,
    description:
      "India's largest digital rewards and loyalty programme for wedding customers by Matrimony.com",
    points: [
      {
        text: "Shop from brands across categories like Jewellery, Electronics, Travel, Apparel, etc...",
        icon: <FontAwesome5 name="user-tie" size={16} color="#A10A31" />,
      },
      {
        text: "Flat discounts on partner brand websites/in-store",
        icon: <FontAwesome5 name="bolt" size={16} color="#A10A31" />,
      },
    ],
    topImage: require("../../assets/images/services/WeddingGiftBoxLogo-New.png"),
    bottomImage: require("../../assets/images/services/wedding-gift.png"),
  },
];

const OurServices: React.FC = () => (
  <FlatList
    data={cardData}
    renderItem={({ item }) => <ServicesCard item={item} />}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.listContainer}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
});

export default OurServices;

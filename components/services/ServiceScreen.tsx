import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface Service {
  id: string;
  title: string;
  description: string;
  imageSource: any;
}

interface ServiceCardProps {
  title: string;
  description: string;
  imageSource: any;
  width?: "half" | "full";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSource,
  width = "half",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        width === "full" ? styles.fullWidthCard : styles.halfWidthCard,
      ]}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Image source={imageSource} style={styles.cardImage} />
      </View>
    </TouchableOpacity>
  );
};

const ServicesScreen: React.FC = () => {
  const services: Service[] = [
    {
      id: "1",
      title: "Community Matrimony.com",
      description: "Exclusive matches from your community",
      imageSource: require("../../assets/images/services/community-matrimony (1).png"),
    },
    {
      id: "2",
      title: "Assisted Service",
      description:
        "Personalized matchmaking service to find your match 3x faster",
      imageSource: require("../../assets/images/assisted-logo.png"),
    },
    {
      id: "3",
      title: "EliteMatrimony.com",
      description: "Largest & successful Elite matchmaking service",
      imageSource: require("../../assets/images/services/elite-matrimony (2).png"),
    },
    {
      id: "4",
      title: "MatchAstro.com",
      description:
        "Exclusive astrology app for Love, Relationship and Marriage",
      imageSource: require("../../assets/images/services/matchastro (1).png"),
    },
    {
      id: "5",
      title: "WeddingBazaar.com",
      description: "India's largest wedding planning platform",
      imageSource: require("../../assets/images/services/wedding-bazaar.png"),
    },
    {
      id: "6",
      title: "Mandap.com",
      description: "India's largest wedding venue booking platform",
      imageSource: require("../../assets/images/services/mandap.png"),
    },
    {
      id: "7",
      title: "WeddingLoan.com",
      description: "Quick & hassle free wedding loan",
      imageSource: require("../../assets/images/services/wedding-loan.png"),
    },
  ];

  return (
    <>
      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imageSource={service.imageSource}
          />
        ))}

        <ServiceCard
          title="Wedding Giftbox"
          description="Curated benefits from 200+ brands"
          imageSource={require("../../assets/images/services/wedding-gift.png")}
          width="full"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  servicesContainer: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    position: "relative",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderColor: "#C2E3CC",
    borderWidth: 1,
    overflow: "hidden",
  },
  halfWidthCard: {
    width: "48%",
  },
  fullWidthCard: {
    width: "100%",
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  cardImage: {
    width: 90,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    bottom: -19,
    right: -35,
    
  },
  footer: {
    alignItems: "center",
    padding: 20,
  },
  footerText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ServicesScreen;

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageSourcePropType,
  Dimensions,
} from "react-native";

interface ServiceCardProps {
  title: string;
  image: ImageSourcePropType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
  </View>
);

const WeddingBazaar: React.FC = () => {
  const services = [
    {
      title: "Venues",
      image: {
        uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/venues_dt.png",
      },
    },
    {
      title: "Photographers",
      image: {
        uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/photographers_dt.png",
      },
    },
    {
      title: "Makeup Artists",
      image: {
        uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/makeupartists_dt.png",
      },
    },
    {
      title: "Planners",
      image: {
        uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/planners_dt.png",
      },
    },
    {
      title: "Decorators",
      image: {
        uri: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/decorators_dt.png",
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          Plan your wedding with WeddingBazaar.com!
        </Text>
        <Text style={styles.subtitle}>
          Weddingbazaar.com from Matrimony.com group is the India's largest
          wedding services marketplace with 2 lakh+ trusted vendors!
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Explore now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcecf0",
  },
  headerContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  card: {
    width: width * 0.4,
    marginRight: 15,
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: width * 0.4,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  buttonContainer: {
    padding: 20,
    width : "50%",
  },
  exploreButton: {
    backgroundColor: "#FF4B78",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  exploreButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
 
});

export default WeddingBazaar;

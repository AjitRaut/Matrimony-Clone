import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ByProfileID: React.FC = () => {
    const [matrimonyID, setMatrimonyID] = useState("");

    const handleViewProfile = () => {
      console.log("Matrimony ID entered:", matrimonyID);
    };

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Matrimony ID</Text>
          <TextInput
            style={styles.input}
            placeholder="E.g. M123456"
            placeholderTextColor="#999"
            value={matrimonyID}
            onChangeText={setMatrimonyID}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleViewProfile}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    );
}

export default ByProfileID

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
        position: "relative",
    },
    inputContainer: {
        width: "90%",
        marginBottom: 20,
        position: "relative",
    },
    label: {
        fontSize: 8,
        color: "green",
        position: "absolute",
        top: -6,
        left: 8,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 1,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#00A651",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: "#000",
    },
    button: {
        position: "absolute",
        backgroundColor: "#f47216",
        paddingVertical: 10,
        paddingHorizontal: 65,
        borderRadius: 30,
        bottom: 5,
        alignSelf: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

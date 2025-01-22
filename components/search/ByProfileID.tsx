import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ByProfileID: React.FC = () => {
    const [matrimonyID, setMatrimonyID] = useState("");

    const handleViewProfile = () => {
      console.log("Matrimony ID entered:", matrimonyID);
    };
  return (
    <View style={styles.container}>
    <Text style={styles.label}>Enter Matrimony ID</Text>
    <TextInput
      style={styles.input}
      placeholder="E.g. M123456"
      placeholderTextColor="#999"
      value={matrimonyID}
      onChangeText={setMatrimonyID}
    />
    <TouchableOpacity style={styles.button} onPress={handleViewProfile}>
      <Text style={styles.buttonText}>View Profile</Text>
    </TouchableOpacity>
  </View>
  )
}

export default ByProfileID

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
      },
      label: {
        fontSize: 16,
        color: "#000",
        marginBottom: 10,
        alignSelf: "flex-start",
        marginLeft: "10%",
      },
      input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#00A651",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 20,
        color: "#000",
      },
      button: {
        backgroundColor: "#f47216",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 35,
        marginTop: 10,
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
})
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

function ProductsQuantity({ route, navigation }) {
  const { id, title, description, imageUrl, price, stock } = route.params;
  const [number, onChangeNumber] = useState(0);
  async function handlePress() {
    console.log(id, stock);
    const res = await fetch(
      `https://pbg-server.herokuapp.com/shop/addStock/${id}?addStock=${number}`,
      {
        method: "PUT",
      }
    );
    console.log(res);
    navigation.navigate("ProductSummery");
  }

  return (
    <View style={styles.quantityContainer}>
      <Text style={styles.text}>Added Quantity:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={onChangeNumber}
        value={number}
      />
      <View style={styles.button}>
        <Pressable onPress={handlePress}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quantityContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    width: "100%",
    height: 60,
    backgroundColor: "#FFE8E8",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { fontSize: 20, textAlign: "center", color: "white" },
});

export default ProductsQuantity;

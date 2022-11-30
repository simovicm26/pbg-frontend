import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

function ProductsQuantity() {
  return (
    <View style={styles.quantityContainer}>
      <Text style={styles.text}>Added Quantity:</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <View style={styles.button}>
        <Pressable>
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

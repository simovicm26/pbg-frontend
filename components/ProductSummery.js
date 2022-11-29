import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function ProductSummery({ route, navigation }) {
  const { id, title, description } = route.params;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.descriptionContent}>{description}</Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Current Quantity: 5</Text>
      </View>
      <View style={styles.restockButton}>
        <Pressable onPress={() => navigation.navigate("ProductsQuantity")}>
          <Text style={styles.restockText}>Add Stock</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionWrapper: { marginVertical: 30 },
  wrapper: { flex: 1, paddingVertical: 30, paddingHorizontal: 20 },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionContent: {
    fontSize: 16,
  },
  restockButton: {
    width: "100%",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
  },
  restockText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});

export default ProductSummery;

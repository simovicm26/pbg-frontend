import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function ProductSummery({ route, navigation }) {
  const { id, title, description, imageUrl } = route.params;
  console.log(imageUrl)
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
      <Image
        source={{ uri: `http://10.0.2.2:8000/image/${imageUrl.slice(7)}` }}
        style={styles.gridBox}
      />
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
  gridBox: {
    width: 150,
    height: 150,
    backgroundColor: "red",
    borderRadius: 10,
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

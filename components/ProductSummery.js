import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";

function ProductSummery({ route, navigation }) {
  const { id, title, description, imageUrl, price } = route.params;
  console.log(imageUrl);
  return (
    <>
      <ScrollView>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: `https://pbg-server.herokuapp.com/image/${imageUrl.slice(
                7
              )}`,
            }}
            style={styles.gridBox}
          />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description:</Text>
            <Text style={styles.descriptionContent}>{description}</Text>
          </View>
          <View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>Product Price:</Text>
              <Text style={styles.description}>{`${price} Din`}</Text>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>Current Quantity:</Text>
              <Text style={styles.description}>5</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.restockButton}>
        <Pressable onPress={() => navigation.navigate("ProductsQuantity")}>
          <Text style={styles.restockText}>Add Stock</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  descriptionWrapper: { marginVertical: 30 },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  gridBox: {
    width: "100%",
    height: 200,
    marginVertical: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionContent: {
    fontSize: 16,
  },
  restockButton: {
    width: "100%",
    backgroundColor: "red",
    padding: 20,
  },
  restockText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});

export default ProductSummery;

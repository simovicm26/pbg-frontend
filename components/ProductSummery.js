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
  const { id, title, description, imageUrl, price, stock, admin, employee } =
    route.params;

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
              <Text style={styles.description}>{stock}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {admin && (
        <View style={styles.restockButton}>
          <Pressable onPress={() => navigation.navigate("ProductsQuantity")}>
            <Text style={styles.restockText}>Add Stock</Text>
          </Pressable>
        </View>
      )}
      {!admin && (
        <View style={styles.restockButton}>
          <Pressable onPress={() => add(imageUrl, title)}>
            <Text style={styles.restockText}>Add To Cart</Text>
          </Pressable>
        </View>
      )}
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
    borderWidth: 2,
    borderColor: "red",
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

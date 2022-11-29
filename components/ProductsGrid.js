import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../screens/dummy-data";
import { TouchableOpacity } from "react-native-gesture-handler";

const renderGridItem = (itemData) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate("Details")}
    >
      <View style={styles.gridBox}></View>
      <Text style={styles.gridText}>{itemData.item.title}</Text>
    </TouchableOpacity>
  );
};

function ProductsGrid() {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  gridText: {
    textAlign: "center",
  },
  gridBox: {
    width: 150,
    height: 150,
    backgroundColor: "red",
    borderRadius: 10,
  },
});

export default ProductsGrid;

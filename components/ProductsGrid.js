import React from "react";
import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
// import { Icon } from "react-native-vector-icons/Icon";
import { CATEGORIES } from "../screens/dummy-data";
import Icon from "react-native-vector-icons/FontAwesome";
const myIcon = <Icon name="plus" size={30} color="#ffffff" />;

function ProductsGrid(props) {
  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => {
          return (
            <View style={styles.gridItem}>
              <Pressable
                onPress={() =>
                  props.navigation.navigate("ProductsDetails", {
                    id: itemData.item.id,
                    title: itemData.item.title,
                  })
                }
              >
                <View style={styles.gridBox}></View>
                <Text style={styles.gridText}>{itemData.item.title}</Text>
              </Pressable>
            </View>
          );
        }}
        numColumns={2}
      />
      <View style={styles.addButton}>
        <Pressable>{myIcon}</Pressable>
      </View>
    </>
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
  addButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    margin: 20,
    borderRadius: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductsGrid;

import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import openSocket from "socket.io-client";
// import { Icon } from "react-native-vector-icons/Icon";
/* import { CATEGORIES } from "../screens/dummy-data"; */
import Icon from "react-native-vector-icons/FontAwesome";
const myIcon = <Icon name="plus" size={30} color="#ffffff" />;
const bin = <Icon name="trash" size={30} color="#ffffff" />;
const cross = <Icon name="close" size={20} color="#ffffff" />;
const crossBig = <Icon name="close" size={30} color="#ffffff" />;
const cart = <Icon name="shopping-cart" size={30} color="#ffffff" />;

function ProductsGrid({ route, navigation }) {
  const { admin, employee } = route.params;
  const [productData, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [deleteMode, setDeleteMode] = useState(false);
  async function handleDelete(id) {
    setDeleteMode((prev) => !prev);
    try {
      const res = await fetch(
        `https://pbg-server.herokuapp.com/shop/deleteProduct/${id}`,
        {
          method: "DELETE",
        }
      );
      await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetch("https://pbg-server.herokuapp.com/shop/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setIsLoading(false);
        return;
      })
      .then(() => {
        const socket = openSocket("https://pbg-server.herokuapp.com");
        socket.on("connect", () => console.log(socket.id));
        socket.on("productAdded", (data) => {
          setData((prev) => [...prev, data.product]);
        });
        socket.on("productDeleted", (data) => {
          console.log("DELETE");
          setData((prev) =>
            prev.filter((product) => product._id !== data.productId)
          );
        });
        socket.on("stockAdded", (data) => {
          console.log("yupi");
          setData((prev) => {
            const index = prev.findIndex(
              (product) => product._id === data.productId
            );
            console.log(index);
            const newData = [...prev];
            const oldStock = newData[index].stock;
            console.log(oldStock);
            console.log(data.addStock);
            newData[index].stock = Number(oldStock) + Number(data.addStock);
            console.log(newData);
            return newData;
          });
        });
      })
      .catch((error) => console.log(error));
  }, []);

  function renderItem({ item }) {
    return (
      <View style={styles.gridItem}>
        <Pressable
          onPress={() => {
            if (!deleteMode)
              navigation.navigate("ProductsDetails", {
                id: item._id,
                title: item.title,
                description: item.description,
                imageUrl: item.imageUrl,
                price: item.price,
                stock: item.stock,
              });
          }}
        >
          <Image
            source={{
              uri: `https://pbg-server.herokuapp.com/image/${item.imageUrl.slice(
                7
              )}`,
            }}
            style={styles.gridBox}
          />
          <Text style={styles.gridText}>{item.title}</Text>
        </Pressable>
        {deleteMode && (
          <View
            style={{
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              position: "absolute",
              top: -10,
              right: -10,
              borderRadius: 100,
            }}
          >
            <Pressable onPress={() => handleDelete(item._id)}>
              {cross}
            </Pressable>
          </View>
        )}
      </View>
    );
  }

  return (
    <>
      {!isLoading && (
        <FlatList
          contentContainerStyle={{ alignItems: "center", paddingVertical: 30 }}
          data={productData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
        />
      )}
      {admin && (
        <View style={styles.deleteButton}>
          <Pressable onPress={() => setDeleteMode((prev) => !prev)}>
            {deleteMode ? crossBig : bin}
          </Pressable>
        </View>
      )}
      {admin && (
        <View style={styles.addButton}>
          <Pressable
            onPress={() => {
              if (!deleteMode) navigation.navigate("ProductForm");
            }}
          >
            {myIcon}
          </Pressable>
        </View>
      )}
      {!admin && (
        <View style={styles.addButton}>
          <Pressable
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            {cart}
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: 150,
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
    backgroundColor: "#353535",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    position: "absolute",
    bottom: 80,
    right: 0,
    width: 60,
    height: 60,
    margin: 20,
    borderRadius: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductsGrid;

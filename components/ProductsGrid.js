import React from "react";
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

function ProductsGrid(props) {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("http://10.0.2.2:8000/shop/getProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.products);
        setIsLoading(false);
        return;
      })
      .then(() => {
        const socket = openSocket("http://10.0.2.2:8000");
        socket.on("connect", () => console.log(socket.id));
        socket.on("productAdded", (data) => {
          console.log(data);
          setData((prev) => [...prev, data.product]);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  function renderItem({ item }) {
    console.log(item);
    return (
      <View style={styles.gridItem}>
        <Pressable
          onPress={() =>
            props.navigation.navigate("ProductsDetails", {
              id: item._id,
              title: item.title,
              description: item.description,
            })
          }
        >
          <View style={styles.gridBox}></View>
          <Image source={item.imageUrl} />
          <Text style={styles.gridText}>{item.title}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <>
      {!isLoading && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
        />
      )}
      <View style={styles.addButton}>
        <Pressable onPress={() => props.navigation.navigate("ProductForm")}>
          {myIcon}
        </Pressable>
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
    backgroundColor: "#353535",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductsGrid;

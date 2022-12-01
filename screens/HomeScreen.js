import React, { useState } from "react";
import { View, Text, Button, Pressable } from "react-native";
import ProductsGrid from "../components/ProductsGrid";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsDetails from "../components/ProductsDetails";
import LoginForm from "../components/LoginForm";
import ProductForm from "../components/ProductForm";
import Cart from "../components/Cart";

const Stack = createNativeStackNavigator();

function HomeScreen({ route }) {
  const { admin, employee } = route.params;
  const [cart, setCart] = useState([]);

  function addToCart(img, title) {
    setCart((prev) => [...prev, { img, title }]);
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsList"
        component={ProductsGrid}
        options={{
          headerShown: false,
        }}
        initialParams={{
          employee,
          admin,
        }}
      />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={{
          title: "Details",
        }}
        initialParams={{
          employee,
          admin,
          add: addToCart,
        }}
      />
      <Stack.Screen
        name="LoginForm"
        component={LoginForm}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="ProductForm"
        component={ProductForm}
        options={{ title: "Add New Product" }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Cart" }}
        initialParams={{ cart }}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;

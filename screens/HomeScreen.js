import React from "react";
import { View, Text, Button } from "react-native";
import ProductsGrid from "../components/ProductsGrid";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsDetails from "../components/ProductsDetails";
import LoginForm from "../components/LoginForm"
import ProductForm from "../components/ProductForm";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsList"
        component={ProductsGrid}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={{ title: "Details" }}
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
    </Stack.Navigator>
  );
}

export default HomeScreen;

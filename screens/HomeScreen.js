import React from "react";
import { View, Text, Button } from "react-native";
import ProductsGrid from "../components/ProductsGrid";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsDetails from "../components/ProductsDetails";
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductForm"
        component={ProductForm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;

import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ProductSummery from "./ProductSummery";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsQuantity from "./ProductsQuantity";

const Stack = createNativeStackNavigator();

function ProductsDetails({ route, navigation }) {
  const { id, title, description, imageUrl } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductSummery"
        component={ProductSummery}
        options={{ headerShown: false }}
        initialParams={{ id, title, description, imageUrl }}
      />
      <Stack.Screen
        name="ProductsQuantity"
        component={ProductsQuantity}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ProductsDetails;

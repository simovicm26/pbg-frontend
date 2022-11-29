import React from "react";
import { View, Text } from "react-native";
import ProductsGrid from "../components/ProductsGrid";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsDetails from "../components/ProductsDetails";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsList"
        component={ProductsGrid}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;

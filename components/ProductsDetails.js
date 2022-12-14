import React, { useState } from "react";
import ProductSummery from "./ProductSummery";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsQuantity from "./ProductsQuantity";

const Stack = createNativeStackNavigator();

function ProductsDetails({ route, navigation }) {
  const {
    id,
    title,
    description,
    imageUrl,
    price,
    stock,
    employee,
    admin,
    add,
  } = route.params;
  console.log(employee);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductSummery"
        component={ProductSummery}
        options={{ headerShown: false }}
        initialParams={{
          id,
          title,
          description,
          imageUrl,
          price,
          stock,
          admin,
          employee,
          add,
        }}
      />
      <Stack.Screen
        name="ProductsQuantity"
        component={ProductsQuantity}
        options={{ headerShown: false }}
        initialParams={{
          id,
          title,
          description,
          imageUrl,
          price,
          stock,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProductsDetails;

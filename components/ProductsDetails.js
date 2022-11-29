import React from "react";
import { View, Text } from "react-native";

function ProductsDetails({ route }) {
  const { id, title } = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default ProductsDetails;

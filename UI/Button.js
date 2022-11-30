import React from "react";
import { View, Text, Pressable } from "react-native";

function Button({ title, onPress }) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

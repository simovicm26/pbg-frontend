import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import ImagePicker from "../UI/ImagePicker";

export default function ProductForm() {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  async function handlePress() {
    console.log(title, price, description, imageUrl);
    try {
      const res = await fetch("http://10.0.2.2:8000/shop/addProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, description, imageUrl }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <ImagePicker></ImagePicker>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            onChangeText={setPrice}
            keyboardType="decimal-pad"
          />
          <TextInput
            style={styles.description}
            placeholder="Description"
            multiline={true}
            numberOfLines={5}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Image URL"
            onChangeText={setImageUrl}
          />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Pressable onPress={handlePress}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 80,
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    marginTop: 25,
    marginBottom: 30,
    fontSize: 30,
  },
  description: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    width: "100%",
    height: 100,
    backgroundColor: "#FFE8E8",
    fontSize: 20,
    padding: 10,
    marginVertical: 10,
    textAlignVertical: "top",
  },
  input: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    width: "100%",
    height: 60,
    backgroundColor: "#FFE8E8",
    fontSize: 20,
    padding: 10,
    marginVertical: 10,
  },

  button: {
    width: "100%",
    backgroundColor: "red",
    padding: 20,
  },
  buttonText: { fontSize: 20, textAlign: "center", color: "white" },
});

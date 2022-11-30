import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function UploadImage(props) {
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync();
    console.log(_image)
    props.handleImage(_image['assets'][0]['uri'])
  };
  return (
    <View style={imageUploaderStyles.container}>
      {props.image && (
        <Image source={{ uri: props.image }} style={{ width: 200, height: 200 }} />
      )}
      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity
          onPress={addImage}
          style={imageUploaderStyles.uploadBtn}
        >
          <Text style={{ color: "white" }}>
            {props.image ? "Edit" : "Upload"} Image
          </Text>
          <AntDesign name="camera" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 50,
    borderWidth: 2,
    borderColor: "red",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#353535",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

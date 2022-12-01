import React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";

function Cart({ route }) {
  return (
    <>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingVertical: 30,
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "red",
                marginRight: 20,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../images/jackdaniels.jpg")}
              />
            </View>
            <Text style={{ fontSize: 20 }}>Jack Daniels Whiskey</Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingVertical: 50,
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "red",
                marginRight: 20,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../images/wisky.jpg")}
              />
            </View>
            <Text style={{ fontSize: 20 }}>Balantines Whiskey</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Proceed to Checkout</Text>
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

export default Cart;

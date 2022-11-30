import React from "react";
import { Text, View, Image, TextBase } from "react-native";

function TopItem({ title, url1, url2 }) {
  return (
    <>
      <Text style={{ fontSize: 20, marginTop: 20 }}>{title}</Text>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <View style={{ padding: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 14, marginBottom: 20 }}>This Week</Text>
          <View
            style={{
              backgroundColor: "#353535",
              borderRadius: 10,
              width: 150,
              borderWidth: 2,
              overflow: "hidden",
              borderColor: "red",
            }}
          >
            <Image
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 230,
              }}
              source={require(`../images/jackdaniels.jpg`)}
            />
            <Text
              style={{
                textAlign: "center",
                color: "white",
                paddingVertical: 10,
              }}
            >
              Gin
            </Text>
          </View>
        </View>
        <View style={{ padding: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 14, marginBottom: 20 }}>This Month</Text>
          <View
            style={{
              backgroundColor: "#353535",
              borderRadius: 10,
              width: 150,
              borderWidth: 2,
              overflow: "hidden",
              borderColor: "red",
            }}
          >
            <Image
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 230,
              }}
              source={require(`../images/wisky.jpg`)}
            />
            <Text
              style={{
                textAlign: "center",
                color: "white",
                paddingVertical: 10,
              }}
            >
              Wisky
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default TopItem;

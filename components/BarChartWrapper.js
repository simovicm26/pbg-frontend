import React from "react";
import { View, Text } from "react-native";
import { BarChart, XAxis } from "react-native-svg-charts";

function BarChartWrapper() {
  const fill = "#FF4D4D";
  const data = [50, 10, 40, 95, 10, 150, 120];

  return (
    <View
      style={{
        height: 200,
        paddingTop: 20,
        paddingHorizontal: 20,
        marginBottom: 110,
        width: "100%",
      }}
    >
      <Text style={{ marginBottom: 20, fontSize: 20, textAlign: "center" }}>
        This Weeks Revenue
      </Text>
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        numberOfTicks={30}
        contentInset={{ top: 30, bottom: 30 }}
        spacing={0.2}
        gridMin={0}
      ></BarChart>
      <XAxis
        data={data}
        formatLabel={(value, index) => index + 1}
        contentInset={{ left: 20, right: 20 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
  );
}

export default BarChartWrapper;

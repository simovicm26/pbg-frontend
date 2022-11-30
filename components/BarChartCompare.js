import React from "react";
import { View, Text } from "react-native";
import { BarChart, XAxis } from "react-native-svg-charts";

function BarChartCompare() {
  const fill = "#FF4D4D";
  const data = [120, 160];

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
        Change in Revenue
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
        formatLabel={(index) => {
          if (index === 0) {
            return "Prev. Week";
          } else if (index === 1) {
            return "This Week";
          }
        }}
        contentInset={{ left: 80, right: 80 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
  );
}

export default BarChartCompare;

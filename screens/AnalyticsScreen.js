import BarChartWrapper from "../components/BarChartWrapper";
import { View, Text, ScrollView } from "react-native";
import BarChartCompare from "../components/BarChartCompare";

function AnalyticsScreen() {
  // const Labels = ({ x, y, bandwidth, data }) =>

  return (
    <ScrollView>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Highest Revenue</Text>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 14, marginBottom: 20 }}>This Week</Text>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 10,
                width: 150,
                height: 150,
              }}
            ></View>
          </View>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 14, marginBottom: 20 }}>This Month</Text>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 10,
                width: 150,
                height: 150,
              }}
            ></View>
          </View>
        </View>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Most Sales</Text>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 14, marginBottom: 20 }}>This Week</Text>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 10,
                width: 150,
                height: 150,
              }}
            ></View>
          </View>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 14, marginBottom: 20 }}>This Month</Text>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 10,
                width: 150,
                height: 150,
              }}
            ></View>
          </View>
        </View>
        <BarChartWrapper></BarChartWrapper>
        <BarChartCompare></BarChartCompare>
      </View>
    </ScrollView>
  );
}

export default AnalyticsScreen;

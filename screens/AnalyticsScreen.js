import BarChartWrapper from "../components/BarChartWrapper";
import { View, Text, ScrollView } from "react-native";
import BarChartCompare from "../components/BarChartCompare";
import TopItem from "../components/TopItem";
import BottomItem from "../components/BottomItem";

function AnalyticsScreen() {
  // const Labels = ({ x, y, bandwidth, data }) =>

  return (
    <ScrollView>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TopItem title="Highest Revenue"></TopItem>
        <BottomItem title="Most Sales"></BottomItem>
        <BarChartWrapper></BarChartWrapper>
        <BarChartCompare></BarChartCompare>
      </View>
    </ScrollView>
  );
}

export default AnalyticsScreen;

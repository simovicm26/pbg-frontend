import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import Icon from "react-native-vector-icons/FontAwesome";
const myIcon = <Icon name="plus" size={30} color="#ffffff" />;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={styles.tab}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Products") {
              iconName = "th-large";
            } else if (route.name === "Analytics") {
              iconName = "pie-chart";
            }

            if (route.name === "Products") {
              color = focused ? "red" : "grey";
            } else if (route.name === "Analytics") {
              color = focused ? "red" : "grey";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={color} />;
          },
          tabBarStyle: {
            height: 70,
          },
          tabBarBadgeStyle: {
            paddingVertical: 10,
          },
          tabBarShowLabel: false,
          // tabBarActiveTintColor: "tomato",
          // tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Products"
          component={HomeScreen}
          options={{ title: "Products" }}
        />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 10,
  },
});

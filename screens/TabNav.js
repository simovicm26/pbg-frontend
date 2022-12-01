import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import { Button } from "react-native";
import AnalyticsScreen from "./AnalyticsScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

function TabNav(props) {
  const hide = props.routeName !== "ProductsList";

  function signOut() {
    props.signout();
  }
  return (
    <Tab.Navigator
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
          height: 80,
        },
        tabBarBadgeStyle: {
          paddingVertical: 10,
        },
        tabBarShowLabel: false,
        // headerRight: () => (

        // ),
      })}
    >
      <Tab.Screen
        name="Products"
        component={HomeScreen}
        options={{
          title: "Products",
          headerRight: () => (
            <Button title="Sign Out" onPress={signOut} color="red" />
          ),
          tabBarStyle: { display: hide ? "none" : "flex", height: 70 },
          headerShown: !hide,
        }}
        initialParams={{ employee: props.employee, admin: props.admin }}
      />
      {props.admin && (
        <Tab.Screen
          name="Analytics"
          component={AnalyticsScreen}
          options={{
            tabBarStyle: { height: 70 },
            headerRight: () => <Button title="Sign in" />,
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default TabNav;

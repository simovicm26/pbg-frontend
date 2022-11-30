import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import TabNav from "./screens/TabNav";
import { createNavigationContainerRef } from "@react-navigation/native";

const myIcon = <Icon name="plus" size={30} color="#ffffff" />;

const Tab = createBottomTabNavigator();
const ref = createNavigationContainerRef();

export default function App() {
  const [routeName, setRouteName] = useState();
  return (
    <NavigationContainer
      ref={ref}
      onReady={() => {
        setRouteName(ref.getCurrentRoute().name);
      }}
      onStateChange={async () => {
        const previousRouteName = routeName;
        const currentRouteName = ref.getCurrentRoute().name;
        setRouteName(currentRouteName);
      }}
    >
      <TabNav routeName={routeName}></TabNav>
    </NavigationContainer>
  );
}

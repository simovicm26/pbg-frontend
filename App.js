import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import TabNav from "./screens/TabNav";
import LoginForm from "./components/LoginForm";
import { createNavigationContainerRef } from "@react-navigation/native";

const myIcon = <Icon name="plus" size={30} color="#ffffff" />;

const ref = createNavigationContainerRef();

export default function App() {
  const [routeName, setRouteName] = useState("");
  const [auth, setAuth] = useState({ admin: false, employee: false });
  function setAdmin() {
    setAuth({ admin: true, employee: false });
  }
  function setEmployee() {
    setAuth({ admin: false, employee: true });
  }
  function signOut() {
    setAuth({ admin: false, employee: false });
  }
  return (
    <NavigationContainer
      ref={ref}
      onReady={() => {
        setRouteName(ref?.getCurrentRoute()?.name);
      }}
      onStateChange={async () => {
        const previousRouteName = routeName;
        const currentRouteName = ref.getCurrentRoute().name;
        setRouteName(currentRouteName);
      }}
    >
      {/* <TabNav routeName={routeName}></TabNav> */}
      {auth.admin || auth.employee ? (
        <TabNav
          admin={auth.admin}
          employee={auth.employee}
          routeName={routeName}
          signout={signOut}
        ></TabNav>
      ) : (
        <LoginForm
          handleAdmin={setAdmin}
          handleEmployee={setEmployee}
        ></LoginForm>
      )}
    </NavigationContainer>
  );
}

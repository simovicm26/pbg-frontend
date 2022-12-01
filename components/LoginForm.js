import {
  AsyncStorage,
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";

export default function ProductForm({ handleAdmin, handleEmployee }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handlePress() {
    // try {
    //   const res = await fetch("http://10.0.2.2:8000/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = await res.json();
    //   await AsyncStorage.setItem("token", data.token);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    if (email === "admin") handleAdmin();
    if (email === "employee") handleEmployee();
  }

  return (
    <>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <Text style={{ fontSize: 30, marginTop: 50 }}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Pressable onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
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

import { StyleSheet, View, Text, Button, Alert } from "react-native";
import * as React from "react";

export default function Inicio({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido!, por favor loguearse 🤗</Text>
        <View style={styles.button}>
          <Button
            title="Ingresar"
            onPress={() => navigation.navigate("panel")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

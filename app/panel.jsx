import * as React from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

export default function Panel({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido al panel de control 😊</Text>
        <Button
          title="Cerrar sesión"
          onPress={() => navigation.navigate("inicio")}
        />
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
});

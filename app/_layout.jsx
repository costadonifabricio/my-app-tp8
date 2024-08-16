import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./inicio";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="inicio" screenOptions={
      {
        headerStyle: {
          backgroundColor: "#B9FBC0"
        }
      }
    }>
      <Stack.Screen name="inicio" component={Inicio} />
    </Stack.Navigator>
  );
}

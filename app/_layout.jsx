import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./inicio";
import Panel from "./panel";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="inicio">
      <Stack.Screen name="inicio" component={Inicio} />
      <Stack.Screen name="panel" component={Panel} />
    </Stack.Navigator>
  );
}

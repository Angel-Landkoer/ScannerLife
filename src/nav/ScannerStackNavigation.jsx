import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Scanner } from "../screens/Scanner";

export function ScannerStackNavigation() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ScannerStack" component={Scanner} />
    </Navigator>
  );
}

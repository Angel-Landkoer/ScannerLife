import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "../screens/Settings";

export function SettingStackNavigation() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SettingsStack" component={Settings} />
    </Navigator>
  );
}

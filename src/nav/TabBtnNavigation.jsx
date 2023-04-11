import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { HomeStackNavigation } from "./HomeStackNavigation";
import { ScannerStackNavigation } from "./ScannerStackNavigation";
import { SettingStackNavigation } from "./SettingStackNavigation";

export function TabBtnNavigation() {
  const { Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="HomeTab"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          headerTitleAlign: "center",
          headerRight: BarIcon,
          title: "Home",
        }}
      />
      <Screen
        name="ScannerTab"
        component={ScannerStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="line-scan"
              size={size}
              color={color}
            />
          ),
          headerTitleAlign: "center",
          title: "Scanner",
        }}
      />
      <Screen
        name="SettingsTab"
        component={SettingStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
          headerTitleAlign: "center",
          title: "Settings",
        }}
      />
    </Navigator>
  );
}

const BarIcon = () => {
  const { navigate } = useNavigation();

  const routeScanner = (name) => navigate(name);

  return (
    <TouchableWithoutFeedback onPress={() => routeScanner("ScannerTab")}>
      <View style={container}>
        <FontAwesome5 name="plus-square" size={24} color="black" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
});

const { container } = styles;

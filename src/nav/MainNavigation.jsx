import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabBtnNavigation } from "./TabBtnNavigation";

export function MainNavigation() {
  return (
    <>
      <NavigationContainer>
        <TabBtnNavigation />
      </NavigationContainer>
    </>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { Navigators } from "../config/Screens";
import CustomTab from "../components/tab/CustomTab";
import MainNavigator from "./MainNavigator";

const Tab = createBottomTabNavigator();

function LoggedInNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <CustomTab />}
    >
      <Tab.Screen
        name={Navigators.MainNavigator as string}
        component={MainNavigator}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default LoggedInNavigator;

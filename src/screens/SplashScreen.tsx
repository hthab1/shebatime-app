import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScreenHeight, ScreenWidth } from "../utils/consts";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/splash.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth,
    height: ScreenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: ScreenWidth,
    height: ScreenHeight,
    resizeMode: "contain",
  },
});

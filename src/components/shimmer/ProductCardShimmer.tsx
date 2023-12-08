import React from "react";
import { View, StyleSheet } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../../config/Colors";

export default function ProductCardShimmer() {
  return (
    <View style={styles.container}>
      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        style={styles.imageContainer}
      />
      <View style={styles.content}>
        <View style={styles.left}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={styles.name}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={styles.price}
          />
        </View>

        <View style={styles.right}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={styles.plusButtonContainer}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flexDirection: "column",
    padding: 6,
    borderRadius: 8,
    height: 260,
    width: "49%",
    marginVertical: 3,
  },
  imageContainer: {
    backgroundColor: Color.teritiary,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    borderRadius: 6,
    width: "100%",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 1,
  },
  right: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  plusButtonContainer: {
    backgroundColor: Color.primary,
    height: 30,
    width: 30,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    width: "70%",
    height: 20,
    borderRadius: 20,
  },
  price: {
    width: "40%",
    height: 15,
    borderRadius: 20,
    marginTop: 4,
  },
});

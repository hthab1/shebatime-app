import React from "react";
import { View, StyleSheet } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../../config/Colors";

export default function OrderCardShimmer() {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.header]}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.leftHeader}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.rightHeader}
        />
      </View>
      <View style={styles.row}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={[styles.left, styles.leftsmall]}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.right}
        />
      </View>
      <View style={styles.row}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={[styles.left, styles.leftLarge]}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.right}
        />
      </View>
      <View style={styles.row}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={[styles.left, styles.leftMedium]}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.right}
        />
      </View>

      <View style={[styles.row, styles.rowPrice]}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.leftHeader}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.rightHeader}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 5,
    backgroundColor: Color.white,
    borderRadius: 10,
    marginVertical: 5,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Color.primaryBorder,
  },
  rowPrice: {
    borderBottomWidth: 0,
  },
  itemName: {
    flex: 1,
  },
  header: {
    backgroundColor: Color.black50,
  },
  deliveryAddress: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  leftHeader: { height: 15, width: "25%", borderRadius: 20 },
  left: { height: 13, width: "25%", borderRadius: 20 },
  leftsmall: { width: "25%" },
  leftMedium: { width: "35%" },
  leftLarge: { width: "45%" },
  right: { height: 15, width: "25%", borderRadius: 20 },
  rightHeader: { height: 15, width: "30%", borderRadius: 20 },
});

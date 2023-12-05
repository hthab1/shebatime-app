import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { OrderCardProps } from "../../declarations/card";
import Color from "../../config/Colors";
import CustomText from "../text/CustomText";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getMonthDate, getMonthDateYear } from "../../function/time";
import useOrder from "../../hooks/useOrders";
import { Capitalize, getPrice } from "../../function/text";
import { OrderStatusType } from "../../types/loadedData";

export default function OrderCard({ order, style }: OrderCardProps) {
  const { calculateTotalPriceInOrder, getStatusColor } = useOrder();
  const { appCopy } = useSelector((state: RootState) => state.ui);

  const {
    orderDateText,
    orderTotalPriceText,
    orderStatusText,
    deliveryAddressText,
  } = appCopy.OrdersScreen;
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.row, styles.header]}>
        <CustomText color={Color.white} xsmall bold>
          {orderDateText}:
        </CustomText>
        <CustomText color={Color.white} xsmall bold>
          {getMonthDateYear(order.createdAt as string)}
        </CustomText>
      </View>
      <View style={styles.row}>
        <CustomText xsmall>{orderStatusText}:</CustomText>
        <CustomText
          xsmall
          marginLeft={20}
          bold
          color={getStatusColor(order.status as OrderStatusType)}
        >
          {Capitalize(order.status)}
        </CustomText>
      </View>
      <View style={styles.row}>
        <CustomText xsmall>{deliveryAddressText}:</CustomText>
        <View style={styles.deliveryAddress}>
          <CustomText xsmall marginLeft={20}>
            {order.deliveryAddress}
          </CustomText>
        </View>
      </View>
      {order?.products &&
        order?.products?.map((item, index) => (
          <View style={styles.row} key={index}>
            <CustomText xsmall style={styles.itemName}>
              x{item.quantity} {item.productName}
              {item.selectedSize && ", " + item.selectedSize}
            </CustomText>
            <CustomText xsmall marginLeft={20}>
              {getPrice(item.price * item.quantity)}
            </CustomText>
          </View>
        ))}
      <View style={[styles.row, styles.rowPrice]}>
        <CustomText color={Color.primary} xsmall bold>
          {orderTotalPriceText}:
        </CustomText>
        <CustomText color={Color.primary} xsmall bold>
          {getPrice(calculateTotalPriceInOrder(order))}
        </CustomText>
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
});

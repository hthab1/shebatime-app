import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { cacheItem } from "../utils/storage";
import { OrderStatusType, OrderType } from "../types/loadedData";
import { useEffect } from "react";
import Color from "../config/Colors";

export default function useOrder() {
  const dispatch = useDispatch();
  const { cartItems, selectedCartItems } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    cacheItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const calculateTotalPriceInOrder = (item: OrderType): number => {
    let total = 0;
    item?.products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const getStatusColor = (status: OrderStatusType): string => {
    let color = "";
    if (status === "ordered") {
      color = Color.statusOrdered;
    }
    if (status === "delivered") {
      color = Color.statusDelivered;
    }
    if (status === "cancelled") {
      color = Color.statusCancelled;
    }
    if (status === "assigned") {
      color = Color.statusAssigned;
    }
    return color;
  };

  return {
    calculateTotalPriceInOrder,
    getStatusColor,
  };
}

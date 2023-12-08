import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { cacheItem } from "../utils/storage";
import { OrderStatusType, OrderType } from "../types/loadedData";
import { useEffect } from "react";
import Color from "../config/Colors";
import {
  GetOrdersProps,
  checkoutFunctionProps,
} from "../declarations/orderServices";
import { Checkout, GetOrders } from "../api/services/order";
import { Sort } from "../config/api";
import { order, setOrders } from "../reducers/orderReducer";
import { formatPhoneNumber } from "../function/text";
import { setOrdersReload } from "../reducers/reloadReducer";

export default function useOrder() {
  const dispatch = useDispatch();
  const { cartItems, selectedCartItems } = useSelector(
    (state: RootState) => state.cart
  );
  const { userPhone } = useSelector((state: RootState) => state.user);
  const { orders } = useSelector((state: RootState) => state.order);
  const { ordersReload } = useSelector((state: RootState) => state.reload);

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

  const getOrders = async (
    {
      category,
      limit,
      offset,
      populate,
      search,
      setLoading,
      sort,
      type,
    }: GetOrdersProps,
    {
      local,
      more,
      reload,
    }: { reload?: boolean; more?: boolean; local?: boolean }
  ) => {
    if (
      orders &&
      orders.length > 0 &&
      !reload &&
      !more &&
      !local &&
      !ordersReload
    )
      return;
    const response = await GetOrders({
      sort: Sort.descendingCreatedAtOrder,
      limit,
      offset,
      search,
      setLoading,
    });
    const { orders: loadedOrders, status, message } = response;
    if (status === 200) {
      let totalOrders = loadedOrders;
      if (more) {
        totalOrders = [...orders, ...loadedOrders];
      }
      if (local) return totalOrders;
      if (ordersReload) {
        dispatch(setOrdersReload(false));
      }
      totalOrders && dispatch(setOrders(totalOrders));
    }
  };

  const checkout = async ({
    deliveryAddress,
    setLoading,
  }: checkoutFunctionProps): Promise<boolean> => {
    let orderProducts = selectedCartItems.map((index) => {
      return {
        product: cartItems[index].product._id,
        productName: cartItems[index].productName,
        quantity: cartItems[index].quantity,
        price: cartItems[index].price,
        selectedSize: cartItems[index].selectedSize,
      };
    });
    const response = await Checkout({
      order: {
        products: orderProducts,
        deliveryAddress,
        phoneNumber: formatPhoneNumber(userPhone),
      },
      setLoading,
      deliveryAddress,
    });
    const { status, data, message } = response;
    if (status === 200 || 201) {
      dispatch(setOrdersReload(true));
      return true;
    }
    return false;
  };

  return {
    calculateTotalPriceInOrder,
    getStatusColor,
    checkout,
    getOrders,
  };
}

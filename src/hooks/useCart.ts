import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setCartItems, setSelectedCartItems } from "../reducers/cartReducer";
import { cacheItem } from "../utils/storage";
import { CartItemType } from "../types/loadedData";
import { useEffect } from "react";

export default function () {
  const dispatch = useDispatch();
  const { cartItems, selectedCartItems } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    cacheItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItemType) => {
    const newCart = [item, ...cartItems];
    dispatch(setCartItems(newCart));
    const selectedItems = selectedCartItems.map((item) => item + 1);
    dispatch(setSelectedCartItems(selectedItems));
  };

  const removeFromCart = (index: number) => {
    const items = [...cartItems];
    let selectedItems = [...selectedCartItems];
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
    }
    if (selectedItems.includes(index)) {
      selectedItems = selectedItems.filter((item) => item !== index);
      dispatch(setSelectedCartItems(selectedItems));
    }
    dispatch(setCartItems(items));
  };

  const selectAllItemsInCart = () => {
    const items = cartItems.map((item, index) => index);
    dispatch(setSelectedCartItems(items));
  };

  const UnSelectAllItemsInCart = () => {
    dispatch(setSelectedCartItems([]));
  };

  const onItemSelect = (index: number) => {
    let items = [...selectedCartItems];
    if (items.includes(index)) {
      items = items.filter((item) => item !== index);
    } else {
      items.push(index);
    }
    dispatch(setSelectedCartItems(items));
  };

  const calculateTotalSelectedPrice = (): number => {
    let total = 0;

    selectedCartItems.map((item) => {
      total += cartItems[item].price * cartItems[item].quantity;
    });

    return total;
  };

  const increaseQuantity = (index: number) => {
    const updatedCart = cartItems.map((item, i) => {
      if (i === index && item.quantity !== undefined) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    dispatch(setCartItems(updatedCart));
  };

  const decreaseQuantity = (index: number) => {
    const updatedCart = cartItems.map((item, i) => {
      if (i === index && item.quantity !== undefined && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    dispatch(setCartItems(updatedCart));
  };

  return {
    addToCart,
    removeFromCart,
    selectAllItemsInCart,
    UnSelectAllItemsInCart,
    onItemSelect,
    calculateTotalSelectedPrice,
    increaseQuantity,
    decreaseQuantity,
  };
}

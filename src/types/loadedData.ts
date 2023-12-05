export type ProductType = any;

export type UserGenderType = "masculine" | "feminine";

export type ProductSizeType = {
  _id?: string;
  sizeName: string;
  price: number;
};

export type CartItemType = {
  product: ProductType;
  productName: string;
  quantity: number;
  price: number;
  selectedSize?: string;
};

export type OrderStatusType =
  | "ordered"
  | "assigned"
  | "cancelled"
  | "delivered";

export type OrderType = {
  _id?: string;
  products: CartItemType[];
  phoneNumber?: string;
  status?: OrderStatusType;
  deliveryAddress?: string;
  createdAt?: string;
  updatedAt?: string;
};

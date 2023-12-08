import { IdType } from "../declarations/commonServices";

export type UserType = {
  _id: string;
  phone: string;
  otp?: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductCategoryType = "hair" | "baby" | "makeup" | "skincare";

export type ProductType = {
  _id: IdType;
  name: string;
  stock?: number;
  description: string;
  images?: string[];
  howToUsePre?: string;
  howToUsePost?: string;
  howToUseSteps?: string[];
  price: number;
  sizes?: ProductSizeType[];
  availableSizes?: boolean;
  type: UserGenderType;
  category: ProductCategoryType;
  createdAt?: string;
  updatedAt?: string;
};

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
  customer?: UserType;
  deliveryAddress?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type CheckoutOrderType = {
  products: {
    product: string;
    productName?: string;
    quantity: number;
    price: number;
    selectedSize?: string;
  }[];
  phoneNumber?: string;
  deliveryAddress?: string;
};

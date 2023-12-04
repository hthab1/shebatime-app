export type ProductType = any;

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

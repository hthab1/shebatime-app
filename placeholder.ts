export const productPlaceholderData = {
  _id: "6550a3225e447dfb6cdbde34",
  name: "Minoxidil 5%",
  stock: 100,
  description:
    "A powerful hair regrowth solution for men experiencing thinning hair or balding on the top of the scalp. As the top-selling FDA-approved treatment for male pattern baldness, Minoxidil has been clinically proven to prevent further hair loss and help stimulate new hair growth over time.",
  images: [
    "https://res.cloudinary.com/ds8cvugym/image/upload/v1699783454/ul4vy9iti6h6v8fnht9b.png",
    "https://res.cloudinary.com/ds8cvugym/image/upload/v1699975901/pomxb0x4sysbc3aqpcop.png",
    "https://res.cloudinary.com/ds8cvugym/image/upload/v1699783456/qyvsahju2mnkquaijehx.png",
    "https://res.cloudinary.com/ds8cvugym/image/upload/v1699783457/qcnwbgxweqgnrkqbmonb.jpg",
  ],
  howToUsePre: "",
  howToUsePost:
    "Using more or more often will not improve results•continued use is necessary to increase and keep your hair regrowth, or hair loss will begin again.",
  howToUseSteps: [
    "Using the dropper applicator, apply 1ml twice daily onto the scalp in the hair loss area. Do not use more than 1ml.",
    "Spread the liquid evenly over the hair loss area.",
    "Wash your hands with soapy water immediately after application.",
  ],
  price: 1400,
  sizes: [
    {
      sizeName: "1 bottle",
      price: 1400,
      _id: "655392deb4a5eb6197a5c08b",
    },
    {
      sizeName: "3 bottle",
      price: 3800,
      _id: "655392deb4a5eb6197a5c08c",
    },
    {
      sizeName: "1 box",
      price: 7600,
      _id: "655392deb4a5eb6197a5c08d",
    },
    {
      sizeName: "3 box",
      price: 20400,
      _id: "655392deb4a5eb6197a5c08e",
    },
  ],
  availableSizes: true,
  type: "masculine",
  category: "men",
  orders: 0,
  createdAt: "2023-11-12T10:04:18.079Z",
  updatedAt: "2023-11-14T15:31:42.528Z",
  __v: 0,
};

const Product = {
  name: "Minoxidil 5%",
  price: "1500",
  image:
    "https://res.cloudinary.com/ds8cvugym/image/upload/v1699783454/ul4vy9iti6h6v8fnht9b.png",
};
const CartItem = {
  product: productPlaceholderData,
  productName: "Minoxidil 5%",
  price: "1500",
  quantity: 1,
  selectedSize: "1 bottle",
};

export const productsPlaceholderData = Array(10).fill(productPlaceholderData);
export const cartPlaceholderData = Array(10).fill(CartItem);

export const orderPlaceholderData = {
  _id: "656f3766bf022002b0effeec",
  products: [
    {
      product: "6550a3225e447dfb6cdbde34",
      productName: "Minoxidil 5%",
      quantity: 2,
      price: 1400,
      selectedSize: "1 bottle",
      _id: "656f3766bf022002b0effeed",
    },
    {
      product: "6550c6e58772d93a11fc9715",
      productName: "Neo hair lotion",
      quantity: 1,
      price: 3000,
      selectedSize: "",
      _id: "656f3766bf022002b0effeee",
    },
    {
      product: "6550dbf58772d93a11fc9772",
      productName: "Dr. Rashel vitamin C 5 piece set",
      quantity: 1,
      price: 2900,
      selectedSize: "",
      _id: "656f3766bf022002b0effeef",
    },
  ],
  phoneNumber: "0932421241",
  status: "ordered",
  deliveryAddress: "addis ababa",
  createdAt: "2023-12-05T14:44:54.339Z",
  updatedAt: "2023-12-05T14:44:54.339Z",
  __v: 0,
};

export const ordersPlaceholderData = Array(10).fill(orderPlaceholderData);

export const BASE_URL = "https://shebatime-backend.onrender.com/api/v1";

export const Requests = {
  get: {
    getProducts: "/products",
    getProduct: "/products/:id",
    getOrders: "/customer/orders",
  },
  post: {
    sendOtp: "/customer/otp/send",
    verifyOtp: "/customer/otp/verify",
    createOrder: "/orders",
  },
  update: {
    updateUser: "/customer",
  },
  delete: {
    deleteUser: "/customer",
  },
};

export const Sort = {
  descendingOrder: "orders:desc",
  ascendingOrder: "orders:asc",
  descendingCreatedAtOrder: "createdAt:desc",
  ascendingCreatedAtOrder: "createdAt:asc",
};

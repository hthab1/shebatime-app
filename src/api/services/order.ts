import { AxiosResponse } from "axios";
import { postRequest } from "../commonActions/post";
import { Requests } from "../../config/api";
import {
  CheckoutProps,
  CheckoutReturnType,
  GetOrdersProps,
  GetOrdersReturnType,
} from "../../declarations/orderServices";
import { QueryParamsProps } from "../../declarations/commonServices";
import { GetQueryVariables } from "../apiFunctions";
import { getRequest } from "../commonActions/get";

export const GetOrders = async ({
  category,
  limit,
  offset,
  populate,
  search,
  setLoading,
  sort,
  type,
  status,
}: GetOrdersProps): Promise<GetOrdersReturnType> => {
  let queryParams: QueryParamsProps = GetQueryVariables({
    category,
    limit,
    offset,
    populate,
    search,
    sort,
    type,
    status,
  });

  try {
    setLoading && setLoading(true);
    const response: AxiosResponse = await getRequest({
      route: Requests.get.getOrders,
      queryParams,
    });
    setLoading && setLoading(false);

    const orders = response?.data?.orders;
    const status = response?.status;
    const message = response?.data?.msg;

    return {
      status: status,
      orders,
      message: message,
    };
  } catch (error) {
    setLoading && setLoading(false);
    throw error;
  }
};

export const Checkout = async ({
  setLoading,
  order,
}: CheckoutProps): Promise<CheckoutReturnType> => {
  try {
    setLoading && setLoading(true);
    const response: AxiosResponse = await postRequest({
      route: Requests.post.createOrder,
      payload: { ...order },
    });
    setLoading && setLoading(false);

    const data = response?.data?.order;
    const status = response?.status;
    const msg = response?.data?.msg;

    return {
      status: status,
      message: msg,
      data: data,
    };
  } catch (error) {
    setLoading && setLoading(false);
    throw error;
  }
};

import { AxiosResponse } from "axios";
import { QueryParamsProps } from "../../declarations/commonServices";
import { GetQueryVariables } from "../apiFunctions";
import { getRequest } from "../commonActions/get";
import { Requests } from "../../config/api";
import {
  GetProductProps,
  GetProductReturnType,
  GetProductsProps,
  GetProductsReturnType,
} from "../../declarations/productServices";

export const GetProducts = async ({
  setLoading,
  category,
  limit,
  offset,
  populate,
  search,
  sort,
  type,
}: GetProductsProps): Promise<GetProductsReturnType> => {
  let queryParams: QueryParamsProps = GetQueryVariables({
    category,
    limit,
    offset,
    populate,
    search,
    sort,
    type,
  });

  try {
    setLoading && setLoading(true);
    const response: AxiosResponse = await getRequest({
      route: Requests.get.getProducts,
      queryParams,
    });
    setLoading && setLoading(false);

    const productList = response?.data?.products;
    const status = response?.status;
    const message = response?.data?.msg;

    return {
      status: status,
      products: productList,
      message: message,
    };
  } catch (error) {
    setLoading && setLoading(false);
    throw error;
  }
};

export const GetProduct = async ({
  setLoading,
  id,
}: GetProductProps): Promise<GetProductReturnType> => {
  try {
    setLoading && setLoading(true);
    const response: AxiosResponse = await getRequest({
      route: Requests.get.getProduct,
      pathVariables: {
        id,
      },
    });
    setLoading && setLoading(false);

    const products = response?.data?.product;
    const status = response?.status;
    const message = response?.data?.msg;

    return {
      status: status,
      product: products,
      message: message,
    };
  } catch (error) {
    setLoading && setLoading(false);
    throw error;
  }
};

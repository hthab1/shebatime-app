import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { GetProduct, GetProducts } from "../api/services/product";
import { GetProps, IdType } from "../declarations/commonServices";
import { setProducts } from "../reducers/productReducer";
import { UserGenderType } from "../types/loadedData";
import { setProductsReload } from "../reducers/reloadReducer";

export const useProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.product);
  const { userGender } = useSelector((state: RootState) => state.user);
  const { productsReload } = useSelector((state: RootState) => state.reload);

  const getProducts = async (
    { category, limit, offset, populate, search, setLoading, sort }: GetProps,
    {
      reload,
      more,
      local,
    }: {
      reload?: boolean;
      more?: boolean;
      local?: boolean;
    }
  ) => {
    if (
      products &&
      products.length > 0 &&
      !reload &&
      !more &&
      !local &&
      !productsReload
    )
      return;
    const response = await GetProducts({
      setLoading: setLoading,
      category,
      limit,
      offset,
      populate,
      search,
      sort,
      type: userGender as UserGenderType,
    });
    const { products: loadedProducts, message, status } = response;

    if (status === 200) {
      let totalProducts = loadedProducts;
      if (more) {
        totalProducts = [...products, ...totalProducts];
      }
      if (local) return totalProducts;
      if (productsReload) {
        dispatch(setProductsReload(false));
      }
      dispatch(setProducts(totalProducts));
    }
  };

  const getProduct = async (
    id: IdType,
    setLoading?: (loading: boolean) => void
  ) => {
    const response = await GetProduct({
      setLoading,
      id,
    });
    const { product, message, status } = response;
    return product;
  };

  return {
    getProducts,
    getProduct,
  };
};

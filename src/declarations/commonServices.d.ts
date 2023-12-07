export interface GetProps extends QueryParamsProps {
  setLoading?: (loading: boolean) => void;
}

export interface LoadingProps {
  setLoading?: (loading: boolean) => void;
}

export interface GetReturnType {
  message?: string;
  status?: number | string;
}

export type IdType = string;

export interface QueryParamsProps {
  limit?: number;
  offset?: number;
  sort?: string;
  category?: string;
  type?: string;
  search?: string;
  populate?: string;
  status?: string;
}

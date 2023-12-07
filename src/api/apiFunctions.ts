import { QueryParamsProps } from "../declarations/commonServices";

export const GetQueryVariables = ({
  category,
  limit,
  offset,
  populate,
  search,
  sort,
  type,
  status,
}: QueryParamsProps): QueryParamsProps => {
  let queryParams: QueryParamsProps = {};

  if (limit !== undefined) {
    queryParams.limit = limit;
  }

  if (offset !== undefined) {
    queryParams.offset = offset;
  }

  if (populate) {
    queryParams.populate = populate;
  }

  if (search) {
    queryParams.search = search;
  }

  if (sort) {
    queryParams.sort = sort;
  }

  if (type) {
    queryParams.type = type;
  }

  if (category) {
    queryParams.category = category;
  }

  if (status) {
    queryParams.status = status;
  }

  return queryParams;
};

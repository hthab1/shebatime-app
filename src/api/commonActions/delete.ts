import apiInstance from "../axios";
import { AxiosResponse } from "axios";

interface DeleteRequestOptions {
  route: string;
  queryParams?: any;
  pathVariables?: Record<string, string>;
}

export async function deleteRequest(
  options: DeleteRequestOptions
): Promise<AxiosResponse> {
  const { route, queryParams, pathVariables } = options;

  try {
    let modifiedRoute = route;

    const config = {
      params: queryParams,
    };

    if (pathVariables) {
      Object.entries(pathVariables).forEach(([key, value]) => {
        modifiedRoute = modifiedRoute.replace(`:${key}`, value);
      });
    }

    const response = await apiInstance.delete(modifiedRoute, config);
    return response;
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
}

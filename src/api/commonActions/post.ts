import apiInstance from "../axios";
import { AxiosResponse } from "axios";

interface PostRequestOptions {
  route: string;
  payload?: any;
  queryParams?: any;
  pathVariables?: Record<string, string>;
  formData?: boolean;
}

export async function postRequest(
  options: PostRequestOptions
): Promise<AxiosResponse> {
  const { route, payload, queryParams, pathVariables, formData } = options;

  try {
    let modifiedRoute = route;

    const config = {
      params: queryParams,
      headers: {},
    };

    if (pathVariables) {
      Object.entries(pathVariables).forEach(([key, value]) => {
        modifiedRoute = modifiedRoute.replace(`:${key}`, value);
      });
    }

    const response = await apiInstance.post(modifiedRoute, payload, config);
    return response;
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
}

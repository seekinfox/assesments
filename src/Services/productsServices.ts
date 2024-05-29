import axios from "axios";

export const baseURL = ` https://fakestoreapi.com/`;

export const baseQuery = axios.create({
  baseURL,
});

export interface IProduct {
  id: number;
  title: string;
  price: string | number;
  category: string;
  description: string;
  image: string;
}

type ApiResponse<T> = T;

export async function postAPI(url: string, data: IProduct) {
  const response = await baseQuery.post(url, data);
  return response?.data;
}

export async function getAPI<T>(url: string): Promise<ApiResponse<T>> {
  const response = await baseQuery.get<ApiResponse<T>>(url);
  return response?.data;
}

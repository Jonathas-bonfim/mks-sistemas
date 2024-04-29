import { useQuery } from "react-query";
import { apiClient } from "../../services/api";

export interface useGetProductsProps {
  page: number;
  rows: number;
  sortBy?: "id" | "name" | "price";
  orderBy?: "DESC" | "ASC";
}

export interface productsProps {
  count: number;
  products: productProps[];
}

export interface productProps {
  id: number;
  name: string;
  description: string;
  brand: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export function useGetProducts({
  page,
  rows,
  sortBy = "id",
  orderBy = "DESC",
}: useGetProductsProps) {
  const getProducts = async () => {
    const resp = await apiClient.get(
      `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
    );
    return resp.data;
  };

  return useQuery(["products"], getProducts);
}

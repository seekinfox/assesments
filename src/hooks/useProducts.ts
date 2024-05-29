import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { IProduct, getAPI } from "../Services/productsServices";
import { PRODUCTS } from "../Services/paths";
import { useMemo } from "react";

const getProducts = async () => {
  try {
    const res = await getAPI(`${PRODUCTS}?limit=20`);
    return res;
  } catch (error) {
    return error;
  }
};

export default function useProducts({
  ids,
  enabled = true,
}: {
  ids?: string[];
  enabled?: boolean | undefined;
}) {
  const isDataAvailable = useQuery({
    queryKey: ["products"],
    enabled: false,
  });

  const { data, isLoading }: UseQueryResult<IProduct[]> = useQuery({
    queryKey: ["products"],
    enabled: enabled ? true : Boolean(!isDataAvailable),
    queryFn: getProducts,
  });

  const items = useMemo(() => {
    return data?.filter((product: IProduct) =>
      ids?.includes(String(product.id))
    );
  }, [data, ids]);

  return { data, isLoading, items };
}

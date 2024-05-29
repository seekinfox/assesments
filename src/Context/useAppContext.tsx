import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { IProduct } from "../Services/productsServices";

interface IContextData {
  cart: IProduct[];
}
interface IAppContext {
  data: IContextData;
  updateCart: (data: IProduct) => void;
  removeFromCart: (id: number) => void;
}

const AppContext = createContext<IAppContext | null>(null);

export default function ContextWrapper({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IContextData>({
    cart: [],
  });

  const updateCart = useCallback((data: IProduct) => {
    setData((prev) => ({
      ...prev,
      cart: [...prev.cart, data],
    }));
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setData((prev) => ({
      ...prev,

      cart: prev.cart.filter((item: IProduct) => item.id !== id),
    }));
  }, []);

  const values = useMemo(
    () => ({
      data,
      updateCart,
      removeFromCart,
    }),
    [data, updateCart, removeFromCart]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("App context needs be use within AppContextProvider");
  }

  return appContext;
}

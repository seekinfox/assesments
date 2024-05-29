import { useState } from "react";
import { IProduct } from "../Services/productsServices";
import Loading from "../component/Loading";
import Navbar from "../component/Navbar";
import Product from "../component/Product";
import useProducts from "../hooks/useProducts";
import Cart from "../component/Cart";

export default function Products() {
  const { data, isLoading } = useProducts({});
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  function handleONCartClick() {
    setCartIsOpen(true);
  }

  function close() {
    setCartIsOpen(false);
  }

  return (
    <>
      <Navbar onCartClick={handleONCartClick} />
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {data?.map((product: IProduct) => (
              <Product key={product?.id} data={product} />
            ))}
          </div>
        )}
      </div>
      {cartIsOpen && <Cart close={close} />}
    </>
  );
}

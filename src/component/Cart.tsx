import { useAppContext } from "../Context/useAppContext";
import { IProduct } from "../Services/productsServices";
import CartItem from "./CartItem";

interface ICartProps {
  close: () => void;
}
export default function Cart(props: ICartProps) {
  const { close } = props;
  const { data, removeFromCart } = useAppContext();

  return (
    <div
      onClick={close}
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg w-[650px] p-6"
      >
        <div className="mb-4">
          <div className="overflow-y-auto h-[650px] p-4 bg-gray-100 rounded-lg">
            {data?.cart?.map((product: IProduct) => (
              <CartItem product={product} removeFromCart={removeFromCart} />
            ))}
            {!data.cart?.length && (
              <div className="flex justify-center items-center h-full">
                <p className=" text-gray-700 font-semibold">
                  No items in the cart
                </p>
              </div>
            )}
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Checkout
        </button>
      </div>
    </div>
  );
}

import { IProduct } from "../Services/productsServices";

interface ICartItemProps {
  product: IProduct;
  removeFromCart: (id: number) => void;
}

export default function CartItem(props: ICartItemProps) {
  const { product, removeFromCart } = props;

  return (
    <div
      key={product.id}
      className="flex items-center p-4 bg-white rounded-lg shadow-md text-gray-700 mb-4"
    >
      <div className="w-1/6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-16 object-cover rounded-lg"
        />
      </div>
      <div className="w-3/6 px-4">
        <p className="font-semibold text-lg truncate">{product.title}</p>
        <p className="text-gray-500 truncate">{product.description}</p>
      </div>
      <div className="w-2/6 text-right flex flex-col gap-2 items-end">
        <p className="font-bold text-lg text-blue-500">${product.price}</p>
        <button
          onClick={() => removeFromCart(product.id)}
          className=" w-max bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition-colors duration-200"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

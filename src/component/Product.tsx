import { useAppContext } from "../Context/useAppContext";
import { IProduct } from "../Services/productsServices";

interface IProductProps {
  data: IProduct;
}

export default function Product(props: IProductProps) {
  const { data } = props;
  const { updateCart } = useAppContext();

  function addToCart(item: IProduct) {
    updateCart(item);
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-[100%]">
        <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
        <p className="text-gray-600 line-clamp-3">{data.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-800 font-bold">${data.price}</span>
          <button
            onClick={() => addToCart(data)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 mt-auto"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

import { useAppContext } from "../Context/useAppContext";

export default function Navbar(props: { onCartClick: () => void }) {
  const { onCartClick } = props;
  const { data } = useAppContext();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">{/* Empty Navbar */}</div>
        <div>
          <button
            onClick={onCartClick}
            className="relative px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1 14H4L3 3zm3 10h12m0 0l-3-3m3 3l-3 3m0-6l3-3m0 6l3 3"
              ></path>
            </svg>
            My Cart
            {data?.cart.length > 0 && (
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {data?.cart?.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

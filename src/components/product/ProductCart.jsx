import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";

function ProductCart({ product }) {
  return (
    <div>
      <img
        src="https://i.pinimg.com/736x/c7/ff/6f/c7ff6fa82bda57fffdbb6370133ca9fc.jpg"
        alt=""
        className="rounded shadow-2xl"
      />
      <div className=" py-2 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="font-semibold">{product.name}</p>
          <span className="hover:text-red-400 ">
            <FaCartArrowDown />
          </span>
        </div>

        <div className="flex items-center gap-2 font-light">
          <p>{product.brand}</p>
          {"|"}
          <p className="text-[12px]">{product.category}</p>
        </div>
        <p className="font-semibold text-red-500">${product.price} </p>

        <Link
          to={`/product/${product._id}`}
          className=" mt-2  text-sm text-center text-blue-500 hover:underline w-full"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default ProductCart;

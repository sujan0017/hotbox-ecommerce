import { useDispatch, useSelector } from "react-redux";
import {
  productCartDecrement,
  productCartIncrement,
  removeProductFromCart,
} from "../../redux/cart/cartSlicer";
import { MdDelete } from "react-icons/md";

const CartItem = ({ product }) => {

  const dispatch = useDispatch();

  const handelRemoveProduct = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const handleCartIncrement = (id) => {
    dispatch(productCartIncrement(id));
  };

  const handleCartDecrement = (id) => {
    dispatch(productCartDecrement(id));
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-t p-2">
        <div>
          <h3 className="text-xl font-semibold">{product?.name}</h3>
          <div className="flex items-center gap-2 ">
            <p>{product?.brand}</p>
            {"|"}
            <p className="text-[12px]">{product?.category}</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-5">
          <button
            onClick={() => handleCartDecrement(product?._id)}
            className="border px-3 py-2 rounded border-slate-200"
          >
            -
          </button>
          <h5>{product.quantity}</h5>
          <button
            onClick={() => handleCartIncrement(product?._id)}
            className="border px-3 py-2 rounded border-slate-200"
          >
            +
          </button>
        </div>
        <div className="flex items-center gap-1">
          <p>
            {product?.quantity} * {product?.price}
          </p>
          =
          <p className="text-xl font-semibold text-yellow-500">
            ${product?.quantity * product?.price}
          </p>
        </div>

        <button
          onClick={() => handelRemoveProduct(product?._id)}
          className="text-xl text-red-500 hover:bg-red-100 hover:text-red-700 border border-slate-200 p-1 rounded-full cursor-pointer"
        >
          <MdDelete />
        </button>
      </div>
    </>
  );
};

export default CartItem;

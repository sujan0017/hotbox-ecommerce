import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { deleteById } from "../../redux/product/productAction";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import AddProductForm from "./AddProductForm";
import { addProductToCart } from "../../redux/cart/cartSlicer";

function ProductCart({ product }) {
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();

  const { product: cartItems } = useSelector((state) => state.cart);

  const isInCart = cartItems.some((item) => item._id === product._id);

  const {
    delete: { loading, success },
  } = useSelector((state) => state.product);

  const handleDelete = () => {
    setDeleteConfirm(true);
    setSelectedProduct(null);
  };

  const handleConfirmDelete = (id) => {
    dispatch(deleteById(id));
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  };

  const handleCartAdd = () => {
    dispatch(addProductToCart(product));
  };

  useEffect(() => {
    if (success) setDeleteConfirm(false);
  }, [success]);

  return (
    <>
      <div>
        <img
          src="https://i.pinimg.com/736x/c7/ff/6f/c7ff6fa82bda57fffdbb6370133ca9fc.jpg"
          alt=""
          className="rounded shadow-2xl"
        />
        <div className=" py-2 flex flex-col">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{product.name}</p>
            <div className="relative group">
              <button
                onClick={handleCartAdd}
                className="hover:text-red-400 text-xl"
              >
                <FaCartArrowDown />
              </button>
              <p
                className={`min-w-25 p-1 bg-gray-300 absolute right-3 top-5 text-center rounded text-xs opacity-0 group-hover:opacity-100`}
              >
                {isInCart ? "Already in Cart" : "Add to Cart"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-light">
            <p>{product.brand}</p>
            {"|"}
            <p className="text-[12px]">{product.category}</p>
          </div>
          <p className="font-semibold text-red-500">${product.price} </p>
          <div className="flex justify-evenly items-center">
            <span
              onClick={() => handleEdit(product)}
              className="text-xl text-green-500 hover:bg-green-100 hover:text-green-700 border border-slate-200 p-1 rounded-full cursor-pointer"
            >
              <CiEdit />
            </span>
            <Link
              to={`/product/${product._id}`}
              className="  text-sm text-center bg-blue-400 px-3 py-1 text-white hover:bg-blue-500 rounded "
            >
              View Detail
            </Link>
            <span
              onClick={handleDelete}
              className="text-xl text-red-500 hover:bg-red-100 hover:text-red-700 border border-slate-200 p-1 rounded-full cursor-pointer"
            >
              <MdDelete />
            </span>
          </div>
        </div>
      </div>
      {/* Delete confirmation popup */}
      <Modal
        title="Delete Item"
        setIsModalOpen={setDeleteConfirm}
        isModalOpen={deleteConfirm}
        content={
          <div className="flex flex-col items-center mt-5">
            <p className=" text-xl">Do you really wnt to delete ?</p>
            <div className="w-full flex items-center justify-evenly mt-5">
              <button
                onClick={() => setDeleteConfirm(false)}
                className="py-1 px-3 rounded hover:bg-green-500 bg-green-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmDelete(product._id)}
                className="py-1 px-3 rounded hover:bg-red-500 bg-red-400 flex justify-center items-center gap-2"
              >
                Delete{" "}
                <span className="text-xl text-white">
                  {loading ? <Spinner /> : <MdDelete />}
                </span>
              </button>
            </div>
          </div>
        }
      />
      {/* EditPageModal */}
      <Modal
        title={"Edit Product"}
        desc={
          "Update the product name, category, brand, and price to keep your catalog accurate and up to date."
        }
        setIsModalOpen={setIsEditOpen}
        isModalOpen={isEditOpen}
        content={<AddProductForm productToEdit={selectedProduct} />}
      />
    </>
  );
}

export default ProductCart;

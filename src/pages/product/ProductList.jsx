import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import ProductCart from "../../components/product/ProductCart.jsx";
import {
  getAllProduct,
  getProductByCategories,
} from "../../redux/product/productAction.js";
import ProductFilter from "../../components/product/ProductFilter.jsx";
import Modal from "../../components/Modal.jsx";
import { IoAdd } from "react-icons/io5";
import AddProductForm from "../../components/product/AddProductForm.jsx";
import Container from "../../components/Container.jsx";

const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    products,
    loading,
    query,
    add: {success:addSuccess},
    delete: { success: deleteSuccess },
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProduct(query));
    dispatch(getProductByCategories());
  }, [dispatch, query, deleteSuccess, addSuccess]);

  useEffect(() => {
    if (addSuccess) {
      setIsModalOpen(false);
    }
  }, [addSuccess, setIsModalOpen]);

  return (
    <>
      <Container>
        <div className=" mt-5">
          <h1 className="text-3xl text-red-500">Discover Your Perfect Style</h1>
          <p className="font-light ">
            Browse our latest collection of fashion essentials, from trendy
            outfits to timeless accessories designed to match every mood and
            occasion.
          </p>
        </div>
        <div className="w-full flex justify-end mt-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="py-1 px-4 rounded bg-green-600 hover:bg-green-700 flex justify-center items-center gap-2 "
          >
            Add product{" "}
            <span>
              <IoAdd className="text-xl" />
            </span>
          </button>
        </div>
      </Container>

      <ProductFilter />

      {loading ? (
        <div className="flex justify-center mt-64">
          <Spinner width="w-10" height="h-10" />
        </div>
      ) : (
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCart key={product._id} product={product} />
            ))}
          </div>
        </Container>
      )}

      <Modal
        title={"Create New Product"}
        desc={
          "Add stylish products to your collection with pricing, images, and details."
        }
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        content={<AddProductForm />}
      />
    </>
  );
};

export default ProductList;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import ProductCart from "../../components/product/ProductCart.jsx";
import { getAllProduct } from "../../redux/product/productAction.js";
import ProductFilter from "../../components/product/ProductFilter.jsx";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, query } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProduct(query));
  }, [dispatch, query]);

  return (
    <>
      <div className="px-10 mt-5">
        <h1 className="text-3xl text-red-500">Discover Your Perfect Style</h1>
        <p className="font-light mt-2">
          Browse our latest collection of fashion essentials, from trendy
          outfits to timeless accessories designed to match every mood and
          occasion.
        </p>
      </div>
      <ProductFilter />
      {loading ? (
        <div className="flex justify-center mt-64">
          <Spinner width="w-10" height="h-10" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 px-10">
          {products.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;

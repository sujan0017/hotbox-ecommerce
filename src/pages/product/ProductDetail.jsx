import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../../redux/product/productAction";
import Spinner from "../../components/Spinner";
import { FaCartArrowDown } from "react-icons/fa";
import Container from "../../components/Container";
import { addProductToCart } from "../../redux/cart/cartSlicer";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { selectedProduct, loading } = useSelector((state) => state.product);

  const { product } = useSelector((state) => state.cart);

  console.log(product)

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex justify-center mt-64">
        <Spinner width="w-10" height="h-10" />
      </div>
    );
  }

  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-2 gap-5 lg:mt-5">
          <img
            src="https://i.pinimg.com/736x/c7/ff/6f/c7ff6fa82bda57fffdbb6370133ca9fc.jpg"
            alt=""
            className="mx-auto w-full"
          />

          <div className="  flex flex-col gap-5  ">
            <div>
              <h3 className="text-3xl font-semibold">
                {selectedProduct?.name}
              </h3>
              <div className="flex items-center gap-2 ">
                <p>{selectedProduct?.brand}</p>
                {"|"}
                <p className="text-[12px]">{selectedProduct?.category}</p>
              </div>
              <p className="text-xl font-semibold">${selectedProduct?.price}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Select Size</h5>
              <div className="flex items-center justify-evenly">
                <button className="border px-3 py-2 rounded border-slate-200">
                  S
                </button>
                <button className="border px-3 py-2 rounded border-slate-200">
                  M
                </button>
                <button className="border px-3 py-2 rounded border-slate-200">
                  L
                </button>
                <button className="border px-3 py-2 rounded border-slate-200">
                  Xl
                </button>
                <button className="border px-3 py-2 rounded border-slate-200">
                  XXL
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h5 className="font-semibold ">Quantity</h5>
              <div className="flex items-center justify-start gap-5">
                <button className="border px-3 py-2 rounded border-slate-200">
                  -
                </button>
                <h5>{product.quantity}</h5>
                <button className="border px-3 py-2 rounded border-slate-200">
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => dispatch(addProductToCart(selectedProduct))}
              className="bg-red-600 hover:bg-red-700 py-2 text-white flex items-center justify-center gap-3 cursor-pointer "
            >
              Add to cart
              <span>
                <FaCartArrowDown />
              </span>
            </button>

            <div className="flex flex-col gap-1 ">
              <h5 className="font-semibold">Product Description</h5>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos earum, ratione quisquam soluta iste impedit, tempore
                aliquid dolore rem eligendi vel, nemo aliquam non nulla eius
                eaque magnam esse unde animi reprehenderit possimus molestias?
                Laudantium similique delectus eaque ipsam iusto sit odit
                voluptas consequuntur perferendis. Labore nisi earum nobis
                eveniet eius, perspiciatis eos sequi dignissimos assumenda eaque
                laudantium vitae maiores unde quasi praesentium ad id laboriosam
                soluta? Natus provident, architecto fugit, illo in aliquam
                excepturi dignissimos suscipit nam nesciunt libero et. Illum
                quia hic magnam?
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="font-semibold ">Product Description</h5>
              <p className="text-sm text-slate-500">
                Regular Package | Estimated arrival 23 - 25 Nov
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;

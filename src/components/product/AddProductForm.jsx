import { useForm } from "react-hook-form";
import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/product/productAction";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function AddProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    add: { loading, success },
  } = useSelector((state) => state.product);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitAddProduct = (data) => {
    dispatch(addProduct(data));
  };

  useEffect(() => {
    if (success) {
      reset();
      navigate("/product");
    }
  }, [success, reset, navigate]);

  return (
    <form
      onSubmit={handleSubmit(submitAddProduct)}
      className="mt-3 flex flex-col gap-3"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          className="border p-1 shadow border-slate-300 rounded"
        />
        <p className="text-red-500 text-sm -mt-1">{errors.name?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category">Category</label>
        <input
          {...register("category", {
            required: "Category is required",
          })}
          type="text"
          className="border p-1 shadow border-slate-300 rounded"
        />
        <p className="text-red-500 text-sm -mt-1">{errors.category?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="brand">Brand</label>
        <input
          {...register("brand", {
            required: "Brand is required",
          })}
          type="text"
          className="border p-1 shadow border-slate-300 rounded"
        />
        <p className="text-red-500 text-sm -mt-1">{errors.brand?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="price">Price</label>
        <input
          {...register("price", {
            required: "Price is required",
          })}
          type="number"
          className="border p-1 shadow border-slate-300 rounded"
        />
        <p className="text-red-500 text-sm -mt-1">{errors.price?.message}</p>
      </div>

      <button className="py-1 px-4 rounded bg-green-600 hover:bg-green-700 flex justify-center items-center gap-2 mt-5 max-w-max self-center ">
        Add product{" "}
        <span>{loading ? <Spinner /> : <IoAdd className="text-xl" />}</span>
      </button>
    </form>
  );
}

export default AddProductForm;

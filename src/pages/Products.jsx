import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counter/counterSlicer";

const Product = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function countIncrement() {
    dispatch(increment());
  }
  function countDecrement() {
    dispatch(decrement());
  }
  function countReset() {
    dispatch(reset());
  }
  return (
    <div className="mt-5 flex flex-col gap-2">
      <h1 className="text-2xl text-center">{value}</h1>
      <div className="flex justify-center gap-5">
        <button
          onClick={countIncrement}
          className="p-2 rounded-full bg-orange-400 font-semibold"
        >
          +
        </button>
        <button
          onClick={countReset}
          className="p-2 rounded-full bg-orange-400 font-semibold"
        >
          Reset
        </button>
        <button
          onClick={countDecrement}
          className="p-2 rounded-full bg-orange-400 font-semibold"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Product;

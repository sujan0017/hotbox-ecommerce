import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  setLimit,
  setSort,
} from "../../redux/product/productSlicer";

function ProductFilter() {
  const dispatch = useDispatch();
  const { query, categories } = useSelector((state) => state.product);

  const setProductLimit = (limit) => {
    dispatch(setLimit(Number(limit)));
  };

  const setProductSort = (sort) => {
    dispatch(setSort(JSON.parse(sort)));
  };

  const filtersByCategory = (value) => {
    dispatch(setFilters(value ? { category: value } : {}));
  };

  const filtersByName = (value) => {
    dispatch(setFilters(value ? { name: value } : {}));
  };

  return (
    <div className="flex items-center justify-evenly md:justify-between my-5 gap-3 flex-wrap py-2 px-10">
      <div className="flex items-center gap-2">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => filtersByName(e.target.value)}
          id="name"
          type="text"
          value={query?.filters?.name}
          className=" border border-slate-200 rounded p-1"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="category">Category</label>
        {/* <input
          onChange={(e) => filtersByCategory(e.target.value)}
          id="category"
          type="text"
          value={query?.filters?.category}
          className=" border border-slate-200 rounded p-1"
        /> */}
        <select
          onChange={(e) => filtersByCategory(e.target.value)}
          name="category"
          id="category"
          value={query?.filters?.category}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 border border-slate-200 p-1 rounded">
        <label htmlFor="sort">Sort:</label>
        <select
          onChange={(e) => setProductSort(e.target.value)}
          name="sort"
          id="sort"
          value={JSON.stringify(query?.sort)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
        </select>
      </div>

      <div className="flex items-center gap-2 border border-slate-200 p-1 rounded">
        <label htmlFor="limit"> limit</label>
        <select
          value={query?.limit ?? 10}
          onChange={(e) => setProductLimit(e.target.value)}
          name="limit"
          id="limit"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;

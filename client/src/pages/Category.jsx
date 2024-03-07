import { useParams } from "react-router-dom";
import Products from "../components/Products";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Category() {
  const { category } = useParams();

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [subCat, setSubCat] = useState("");

  const { products } = useFetch(
    `/sub-categories?[filters][categories][title][$eq]=${category}`
  );

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-start gap-3 sm:flex-row flex-col">
        <div className="flex flex-col gap-2 flex-1 sm:sticky sm:top-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl">Product Category</h2>
            <div className="flex flex-col gap-1">
              {products?.map((category) => (
                <div key={category?.id} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="category"
                    id={category?.id}
                    value={category?.attributes?.title}
                    className="radio radio-sm"
                    onChange={(e) => setSubCat(e.target.value)}
                  />
                  <label htmlFor={category?.id} className="ml-1">
                    {category?.attributes?.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl">Filter by price</h2>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="filter"
                  id="filter1"
                  value={50}
                  className="radio radio-sm"
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <label htmlFor="filter1" className="ml-1">
                  Less than $50
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="filter"
                  id="filter2"
                  value={100}
                  className="radio radio-sm"
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <label htmlFor="filter2" className="ml-1">
                  Less than $100
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="filter"
                  id="filter3"
                  value={200}
                  className="radio radio-sm"
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <label htmlFor="filter3" className="ml-1">
                  Less than $200
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="filter"
                  id="filter4"
                  value={300}
                  className="radio radio-sm"
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <label htmlFor="filter4" className="ml-1">
                  Less than $300
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="filter"
                  id="filter5"
                  value={400}
                  className="radio radio-sm"
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <label htmlFor="filter5" className="ml-1">
                  Less than $400
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl">Sort by</h2>
            <div className="flex flex-col gap-1">
              <div>
                <input
                  type="radio"
                  name="price"
                  id="price1"
                  value="asc"
                  className="radio radio-sm"
                  onChange={(e) => setSort(e.target.value)}
                />
                <label htmlFor="price1" className="ml-1">
                  Price (lowest)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="price"
                  id="price"
                  value="desc"
                  onChange={(e) => setSort(e.target.value)}
                  className="radio radio-sm"
                />
                <label htmlFor="price" className="ml-1">
                  Price (highest)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-3">
          <div>
            <h1 className="text-4xl font-semibold">
              <span className="text-primary">
                {category.endsWith("s") ? `${category}'` : `${category}'s`}
              </span>{" "}
              collection
            </h1>
          </div>
          <Products
            category={category}
            maxPrice={maxPrice}
            sort={sort}
            subCat={subCat}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;

import { useFetch } from "../hooks/useFetch";
import { CategorySkeleton } from "../skeletons/category.skeleton";
import Card from "./Card";

function Products({ category, maxPrice, sort, subCat }) {
  const { products, loading } = useFetch(
    `/products?populate=*&[filters][categories][title][$eq]=${category}${
      subCat && `&[filters][sub_categories][title][$eq]=${subCat}`
    }&[filters][price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ""}`
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-4">
        {loading ? (
          <CategorySkeleton />
        ) : (
          <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
            {products.map((item) => (
              <Card key={item?.id} item={item?.attributes} id={item?.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;

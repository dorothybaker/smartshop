import { useFetch } from "../hooks/useFetch";
import { SelectedSkeleton } from "../skeletons/selected.skeleton";
import Card from "./Card";

function SelectedProducts({ type }) {
  const { products, loading } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type.toLowerCase()}`
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-4">
        <h1 className="text-3xl">
          <span className="text-primary">{type}</span> products
        </h1>

        {loading ? (
          <SelectedSkeleton />
        ) : (
          <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
            {products?.map((item) => (
              <Card key={item?.id} item={item?.attributes} id={item?.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectedProducts;

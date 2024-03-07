import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GoHeart } from "react-icons/go";

import { MdArrowBack, MdOutlineShoppingCart } from "react-icons/md";
import { useFetch } from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { ProductSkeleton } from "../skeletons/product.skeleton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import toast from "react-hot-toast";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImg, setSelectedImg] = useState("img");
  const [qty, setQty] = useState(1);

  const { products, loading } = useFetch(`/products/${id}?populate=*`);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 w-full">
      {loading ? (
        <ProductSkeleton />
      ) : (
        <>
          <button
            className="btn btn-sm btn-circle mb-2 bg-primary text-white text-sm font-normal hover:text-black"
            onClick={() => navigate(-1)}
          >
            <MdArrowBack size={20} />
          </button>
          <div className="flex gap-4 items-start sm:flex-row flex-col">
            <div className="flex-1 flex flex-row-reverse gap-2 w-full">
              <div className="w-full">
                <img
                  src={`${import.meta.env.VITE_UPLOAD_URL}${
                    products?.attributes?.[selectedImg]?.data?.attributes?.url
                  }`}
                  alt="selectedImg"
                  className="rounded-lg md:h-[450px] sm:h-[400px] h-[300px] w-full object-cover overflow-hidden"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div
                  onClick={() => setSelectedImg("img")}
                  className="lg:h-[100px] h-[90px] lg:w-[100px] cursor-pointer border rounded-lg"
                >
                  <img
                    src={`${import.meta.env.VITE_UPLOAD_URL}${
                      products?.attributes?.img?.data?.attributes?.url
                    }`}
                    alt="image"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div
                  onClick={() => setSelectedImg("img2")}
                  className="lg:h-[100px] h-[90px] lg:w-[100px] cursor-pointer border rounded-lg"
                >
                  <img
                    src={`${import.meta.env.VITE_UPLOAD_URL}${
                      products?.attributes?.img2?.data?.attributes?.url
                    }`}
                    alt="image"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <h1 className="font-semibold text-3xl">
                {products?.attributes?.title}
              </h1>
              <span className="text-primary text-xl">
                ${products?.attributes?.price?.toFixed(2)}
              </span>
              <p className="text-[#787878]">
                {products?.attributes?.description}
              </p>
              <div className="h-10 w-[200px] flex items-center border rounded-lg">
                <span
                  className="flex-1 border-r h-full w-full flex justify-center items-center cursor-pointer"
                  onClick={() =>
                    setQty((prev) => (prev === 1 ? prev : prev - 1))
                  }
                >
                  <AiOutlineMinus color="#212121" size={15} />
                </span>
                <span className="flex-2 h-full w-full flex justify-center items-center">
                  {qty}
                </span>
                <span
                  className="flex-1 border-l h-full w-full flex justify-center items-center cursor-pointer"
                  onClick={() => setQty((prev) => prev + 1)}
                >
                  <AiOutlinePlus color="#212121" size={15} />
                </span>
              </div>
              <button
                className="btn bg-primary text-white hover:text-black flex justify-center font-normal items-center gap-3"
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: products?.id,
                      title: products?.attributes?.title,
                      description: products?.attributes?.description,
                      img: products?.attributes?.img?.data?.attributes?.url,
                      price: products?.attributes?.price,
                      qty,
                    })
                  );

                  toast.success(`Added ${qty} items to the cart!`);
                }}
              >
                <MdOutlineShoppingCart size={20} />
                <span className="uppercase text-base">add to cart</span>
              </button>
              <div className="text-primary uppercase flex gap-1 items-center cursor-pointer">
                <GoHeart size={20} />
                <span>add to wishlist</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;

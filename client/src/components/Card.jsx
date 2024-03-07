import { Link } from "react-router-dom";

function Card({ item, id }) {
  return (
    <Link
      to={`/product/${id}`}
      className="w-[240px] border rounded-lg overflow-hidden relative"
    >
      <div>
        <div className="h-[260px] w-full relative imgContainer">
          <img
            src={`${import.meta.env.VITE_UPLOAD_URL}${
              item?.img?.data?.attributes?.url
            }`}
            alt="image1"
            className="w-full h-full object-cover absolute z-[1] rounded-t-lg"
          />
          <img
            src={`${import.meta.env.VITE_UPLOAD_URL}${
              item?.img2?.data?.attributes?.url
            }`}
            alt="image2"
            className="w-full h-full object-cover absolute secondImg rounded-t-lg"
          />
        </div>
        <div className="flex gap-1 flex-col px-3">
          <h1 className="line-clamp-1">{item?.title}</h1>
          <div className="flex gap-3 text-sm">
            <span className="text-[#787878] line-through">
              ${(item?.price * 1.5)?.toFixed(2)}
            </span>
            <span>${item?.price?.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {item?.isNew && (
        <div className="text-white bg-[#212121] uppercase text-sm absolute top-0 left-0 z-10 p-2 rounded-tl-lg rounded-br-lg">
          new
        </div>
      )}
    </Link>
  );
}

export default Card;

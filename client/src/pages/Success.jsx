import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { useEffect } from "react";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import { FaCheckDouble } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Success() {
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();

  useEffect(() => {
    const emptyCart = () => {
      dispatch(resetCart());
    };

    emptyCart();
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <Confetti width={width} height={height} />
      <div className="p-4 my-5 flex items-center justify-center h-full min-h-[50vh] w-full">
        <div className="text-center flex flex-col justify-center items-center gap-1">
          <FaCheckDouble className="text-primary text-6xl" />
          <h1 className="text-4xl font-semibold">Payment Successfull</h1>
          <p className="text-[#787878] text-lg">
            Thank you for purchasing from SmartShop (SS), we wish you a nice
            day!
          </p>
          <button className="uppercase text-base font-medium btn bg-primary text-white hover:text-black">
            <Link className="w-max" to="/">
              back to home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;

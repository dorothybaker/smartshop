import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

function Cart() {
  const [loading, setLoading] = useState(false);

  const products = useSelector((state) => state?.cart?.products);

  const totalPrice = () => {
    let total = 0;
    products?.forEach((item) => (total += item.qty * item.price));

    return total.toFixed(2);
  };

  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    "pk_test_51ORoXFLC0TNJTMrZ5Nt3s8F35LJg3gNfhJakDAlC2K5NBG3vvlEAIvnKouMrfMHtdCUTmjig7ep2vUBSedaapCdG00ybxCK1u7"
  );
  const handlePayment = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/orders`,
        {
          products,
        },
        {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {products?.length > 0 ? (
        <div className="flex flex-col gap-3">
          {products.map((item) => (
            <div key={item.id} className="flex gap-2 items-start">
              <div>
                <div className="h-[100px] w-[90px]">
                  <img
                    src={`${import.meta.env.VITE_UPLOAD_URL}${item.img}`}
                    alt="cartImage"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <h1 className="line-clamp-1">{item.title}</h1>
                <p className="line-clamp-2 text-[#787878] text-sm">
                  {item.description}
                </p>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span>${item.price.toFixed(2)}</span>
                    <p className="text-sm">Qty: {item.qty}</p>
                  </div>
                  <button
                    className="btn btn-sm btn-circle bg-error text-white hover:text-black"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-4 text-2xl text-[#787878] text-center">
          No items in the cart
        </div>
      )}

      <div className="flex justify-between items-center gap-3 mt-3">
        <span className="text-xl uppercase font-semibold">subtotal</span>
        <span className="text-lg">${totalPrice()}</span>
      </div>
      <button
        className={`btn bg-primary text-white hover:text-black text-base uppercase font-normal ${
          loading && "cursor-not-allowed"
        }`}
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? (
          <span className="loading loading-dots"></span>
        ) : (
          <span>proceed to checkout</span>
        )}
      </button>
      <div
        className="cursor-pointer text-error text-sm uppercase w-max"
        onClick={() => dispatch(resetCart())}
      >
        reset cart
      </div>
    </div>
  );
}

export default Cart;

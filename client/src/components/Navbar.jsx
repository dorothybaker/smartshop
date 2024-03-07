import { Link } from "react-router-dom";

import {
  MdOutlineSearch,
  MdOutlinePerson,
  MdOutlineShoppingCart,
} from "react-icons/md";

import { GoHeart } from "react-icons/go";
import Cart from "./Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector((state) => state?.cart?.products);

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 sm:flex hidden gap-3 items-center">
            <button className="rounded-full bg-gray-100 font-semibold uppercase w-10 flex justify-center items-center h-10">
              en
            </button>
            <div className="join">
              <input
                type="text"
                placeholder="SMARTSHOP (SS)."
                className="input input-bordered join-item text-[15px] h-10"
              />
              <button className="w-10 flex justify-center items-center join-item text-white bg-primary h-10">
                <MdOutlineSearch size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex sm:justify-center justify-start">
            <Link className="w-max uppercase text-2xl font-bold" to="/">
              smart<span className="text-primary">shop</span>.
            </Link>
          </div>

          <div className="flex-1 flex gap-3 justify-end items-center">
            <div className="cursor-pointer">
              <MdOutlinePerson size={23} />
            </div>
            <div className="cursor-pointer">
              <GoHeart size={23} />
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => {
                document.getElementById("my_modal_1").showModal();
              }}
            >
              <MdOutlineShoppingCart size={23} />
              <span className="bg-primary text-white h-5 w-5 text-sm absolute -top-3 -right-2 flex justify-center items-center rounded-full">
                {products?.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Your Shopping Cart</h3>
          <div className="py-2">
            <Cart />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle bg-primary text-white hover:text-black absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Navbar;

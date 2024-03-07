import { MdLocationPin, MdCall, MdMail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#212121]">
      <div className="max-w-7xl mx-auto p-4">
        <div className="border-b pb-2 border-[#454545]">
          <h1 className="text-white font-semibold uppercase">smartshop.</h1>
          <p className="text-[#787878] text-sm">
            <span className="text-primary">SmartShop</span> is a user-friendly
            platform where customers can browse and purchase a wide range of
            products online. The application provides a secure payment gateway
            for transactions and offers various shipping options for customers
            to choose from. Customers can browse products, make purchases, and
            complete transactions all through our website. It offers
            convenience, a wide variety of options, and the opportunity to shop
            from anywhere at any time.
          </p>
        </div>

        <div className="border-b py-2 border-[#454545]">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-white uppercase">popular categories</h3>
              <ul className="flex flex-col text-[#787878]">
                <li className="hover:text-primary">Men</li>
                <li className="hover:text-primary">Women</li>
                <li className="hover:text-primary">Kids</li>
                <li className="hover:text-primary">Fashion</li>
                <li className="hover:text-primary">Accessories</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white uppercase">products</h3>
              <ul className="flex flex-col text-[#787878]">
                <li className="hover:text-primary">Prices Drop</li>
                <li className="hover:text-primary">New products</li>
                <li className="hover:text-primary">Best Sales</li>
                <li className="hover:text-primary">Contact Us</li>
                <li className="hover:text-primary">Sitemap</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white uppercase">useful links</h3>
              <ul className="flex flex-col text-[#787878]">
                <li className="hover:text-primary">Cart</li>
                <li className="hover:text-primary">Wishlist</li>
                <li className="hover:text-primary">Favorites</li>
                <li className="hover:text-primary">Payment method</li>
                <li className="hover:text-primary">Refund policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white uppercase">our company</h3>
              <ul className="flex flex-col text-[#787878]">
                <li className="hover:text-primary">Delivery</li>
                <li className="hover:text-primary">Legal Notice</li>
                <li className="hover:text-primary">Terms and Conditions</li>
                <li className="hover:text-primary">About Us</li>
                <li className="hover:text-primary">Secure Payment</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white uppercase">contact</h3>
              <ul className="flex flex-col text-[#787878] gap-3">
                <li className="flex gap-2 items-center">
                  <div>
                    <MdLocationPin size={23} />
                  </div>
                  <span>
                    419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <div>
                    <MdCall size={23} />
                  </div>
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex gap-2 items-center">
                  <div>
                    <MdMail size={23} />
                  </div>
                  <span>contact@smartshop.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-2 text-[#787878] flex flex-col items-center justify-center text-center gap-2">
          <div>
            <img
              src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/payment.png"
              alt="payment"
            />
          </div>
          <div>SmartShop &copy; Copyright 2024 All rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

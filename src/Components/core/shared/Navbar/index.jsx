import { logo, navbarLogo } from "@/src/constant/home/home";
import { navMenu } from "@/src/constant/home/navbar";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import dynamic from "next/dynamic";
import { CartDrawer } from "./CartDrawer";
import { useEffect, useState } from "react";
const DynamicLink = dynamic(() => import("next/link"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const index = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const [cartItem, setCartItem]= useState(0)

  useEffect(() => {
    const cartData = localStorage.getItem("cart");

    if (cartData) {
      // Parse the data if it exists
      const parsedCartData = JSON.parse(cartData);

      // Check if it's an array or object
      const length = Array.isArray(parsedCartData)
        ? parsedCartData.length
        : Object.keys(parsedCartData).length;

      setCartItem(length);
    } else {
      // Handle the case when "cart" key is not in localStorage
      setCartItem(0);
    }
  }, [cartItem]);


  const navLink = (
    <>
      {navMenu.map((item, index) => (
        <DynamicLink key={index} href={item.url}>
          <li>
            <a className="uppercase">{item.title}</a>
          </li>
        </DynamicLink>
      ))}
    </>
  );

  return (
    <div className="bg-black text-white">
      <div className="navbar lg:flex lg:justify-between container mx-auto px-3">
        <div className="navbar-start">
          <div className="dropdown bg-black text-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <div className="lg:hidden">
            <IoMdSearch className="text-xl mr-3"></IoMdSearch>
          </div>
          <a className="btn btn-ghost text-xl w-full lg:w-auto justify-end lg:justify-start">
            <img width={100} height={0} src={navbarLogo} alt="logo" />
          </a>
          <div className="hidden lg:flex navbar-center">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
        </div>

        <div className="relative p-3 navbar-end">
          <div className="hidden lg:flex">
            <IoMdSearch className="text-xl mr-3"></IoMdSearch>
          </div>
          <button onClick={handleButtonClick}>
            <BsCart2 className="text-2xl" />
            <div className="bg-white rounded-full text-[8px] text-black absolute p-1 top-2 right-0">
              +{cartItem}
            </div>
          </button>
          {isDrawerOpen && <CartDrawer />}
        </div>
      </div>
    </div>
  );
};

export default index;

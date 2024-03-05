import { navbarLogo } from "@/src/constant/home/home";
import { navMenu } from "@/src/constant/home/navbar";
import { BsCart2 } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import dynamic from "next/dynamic";
import { CartDrawer } from "./CartDrawer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MobileNavbar from "./MobileNavbar";
import MenuIcon from "@mui/icons-material/Menu";
import NavAd from "./NavAd/NavAd";
// import NavAd from "./NavAd/NavAd";


const DynamicLink = dynamic(() => import("next/link"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const index = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cartItem, setCartItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const cartData = localStorage.getItem("cart");

    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      const length = Array.isArray(parsedCartData)
        ? parsedCartData.length
        : Object.keys(parsedCartData).length;
      setCartItem(length);
    } else {
      setCartItem(0);
    }
  }, [cartItem]);

  const router = useRouter();
  const pathname = router?.pathname;

  const navLink = (
    <>
      {navMenu.map((item, index) => (
        <DynamicLink key={index} href={item.url}>
          <li>
            <a className={`uppercase`}>{item.title}</a>
          </li>
        </DynamicLink>
      ))}
    </>
  );

  return (
    <div className="bg-black fixed top-0 z-10 w-full text-white py-3">
      <div className="bg-gray-900 pt-4 pb-3 -mt-4 ">

   <NavAd></NavAd>
   

      </div>
      <div className="navbar  lg:flex lg:justify-between container mx-auto px-3">
        <div className="navbar-start">
          <div className="dropdown dropdown-end bg-black text-white">
            <div
              onClick={() => setIsMenuOpen(true)}
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <MenuIcon />
            </div>
            <div>
              <MobileNavbar
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
              />
            </div>
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

        <div className="py-3 navbar-end">
          <div className="hidden  lg:flex">
            <IoMdSearch className="text-2xl  mr-3"></IoMdSearch>
          </div>
          <button className="flex" onClick={handleButtonClick}>
            <BsCart2 className="text-2xl" />
            <div className="text-[10px] font-bold -mt-3 bg-white rounded-full px-2 text-black">
              {cartItem}
            </div>
          </button>
          {isDrawerOpen && <CartDrawer />}
        </div>
      </div>
    </div>
  );
};

export default index;

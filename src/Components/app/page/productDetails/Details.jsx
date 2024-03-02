import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PrimaryButton from "@/src/Components/core/shared/PrimaryButton/PrimaryButton";
import whatsApp from "../../../../../public/wp.json";
import Lottie from "lottie-react";

const Details = ({ id }) => {
  const [count, setCount] = useState(1);
  const [selectedProductImage, setSelectedProductImage] = useState(null);
  const [allProductData, setAllProductData] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const productData = localStorage.getItem("cart");
    const parseData = JSON.parse(productData);
    setAllProductData(parseData);
  }, []);

  const product =
    allProductData && allProductData?.find((data) => data?.id === id);
  console.log(product);

  const parseMoney = (money) => {
    return parseFloat(money.replace(/,/g, "").replace(/[^\d.-]/g, "")).toFixed(
      2
    );
  };

  const calculateTotalPrice = () => {
    if (product?.money && typeof product.money === "string") {
      const moneyAsNumber = parseMoney(product.money);
      if (!isNaN(moneyAsNumber)) {
        return (moneyAsNumber * count).toFixed(2);
      }
    }

    return 0;
  };

  const handleProductClick = (image) => {
    setSelectedProductImage(image);
  };

  return (
    <div>
      <div className="px-6 py-3 mt-3 ml-4">
        <h3 className="text-[12px] text-slate-600">
          Home /{" "}
          <span className="text-[13px] text-slate-700">
            ONYS Bottle - 200 ML
          </span>
        </h3>
      </div>

      {/* whatsapp icon */}

      <div className="fixed top-[50%] right-5">
        <Lottie className="w-[90px]" animationData={whatsApp} />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 my-3">
        <div className="md:flex gap-8 md:gap-16">
          <div>
            <img
              className="md:w-[630px] md:h-[700px] w-full h-full rounded-xl"
              src={selectedProductImage || product?.image[0]?.mainImage1}
              alt="product"
            />
            <div className="flex gap-5 mt-4">
              {product?.productColorImage?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleProductClick(item?.image)}
                >
                  <img
                    src={item?.image}
                    className="w-20 h-20 rounded-md cursor-pointer"
                    alt="product details"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <h1 className="text-4xl font-semibold">{product?.title}</h1>
            <div className="mt-5 flex items-center gap-3">
              <Rating
                style={{ maxWidth: 100 }}
                value={product?.review}
                readOnly
                className="opacity-60 text-sm"
              />

              <h3 className="text-gray-500 text-[14px]">3 Reviews</h3>
            </div>
            <h1 className="text-[22px] font-semibold text-[#FF0000] mt-">Tk</h1>
            <div className="flex items-center gap-5 space-y-1">
              <h3 className="text-[#FF0000]  font-semibold text-[24px] mb-1 ">
                {calculateTotalPrice()}
              </h3>
              <button className="uppercase bg-black py-[6px] m px-6 rounded-lg text-white text-[12px] font-bold">
                Save Tk <br />
                465.54
              </button>
            </div>
            <h3>
              <del className="text-[15px] font-semibold text-slate-500">
                Tk 3,550.45
              </del>
            </h3>

            <div className="mt-2">
              <div className="flex gap-1 items-center ">
                <p className="text-[15px] text-slate-700">
                  or 3 payments of Tk 994.46 with
                </p>
                <img
                  className="h-[17px] w-[72px]"
                  src="https://gateway.apaylater.com/plugins/common/assets/svg/logo.svg"
                  alt="gateway logo"
                />
              </div>
              <div className="mt-1">
                <p className="text-[15px] text-slate-700">
                  or 4 payments of Tk 745.73 with{" "}
                  <span className="text-[#5ee9a6] font-bold text-[14px]">
                    Grab
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-slate-600 text-[15px]">
                Using Android or older iPhones? Click{" "}
                <a className="text-black font-semibold underline" href="/">
                  here
                </a>{" "}
                to get ONYX MagRing.
              </h3>
            </div>

            <div className="mt-9">
              <h2 className="text-slate-700 text-[14px] mb-2">
                Color : ONYX Black
              </h2>
              <div className="flex gap-5 ">
                {product?.productColorImage?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleProductClick(item?.image)}
                  >
                    <img
                      src={item?.image}
                      className="w-20 h-20 rounded-md cursor-pointer"
                      alt="product details"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h1>Quantity:</h1>
              <div className="border-2 cursor-pointer mt-2 py-2 text-lg font-bold flex justify-between px-5 w-40">
                <div onClick={handleDecrement}>-</div>
                <div className="border-s-2 border-e-2 px-5">{count}</div>
                <div onClick={handleIncrement}>+</div>
              </div>
            </div>
            <div className="mt-5">
              <PrimaryButton title={"CheckOut"} />
            </div>
          </div>
        </div>

        <section className="bg-[#EEF1F5] my-6 md:my-8">
          <div className="mx-auto">
            <h1 className="text-center text-[44px] font-semibold text-[#282828]">WHY ONYX BOTTLE?</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;

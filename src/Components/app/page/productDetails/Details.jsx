import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PrimaryButton from "@/src/Components/core/shared/PrimaryButton/PrimaryButton";

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
    <div className="max-w-screen-xl mx-auto mt-28 px-5 my-20">
      <div className="md:flex justify-between">
        <div>
          <img
            className="md:w-[650px] md:h-[700px] w-full h-full rounded-xl"
            src={selectedProductImage || product?.image[0]?.mainImage1}
            alt="product"
          />
        </div>

        <div className="lg:mt-10 flex flex-col mt-0">
          <h1 className=" text-2xl lg:text-4xl order-2 lg:order-1 font-bold">
            {product?.title}
          </h1>
          <div className="my-2 lg:mt-5 order-3  lg:order-2">
            <Rating
              style={{ maxWidth: 100 }}
              value={product?.review}
              readOnly
            />
          </div>
          <h1 className=" text-xl lg:text-3xl order-4  lg:order-3 font-semibold text-red-500 my-2 lg:mt-5">
            tk: {calculateTotalPrice()}
          </h1>
          <div className="flex order-1  lg:order-4  gap-5 mt-5 lg:mt-20">
            {product?.productColorImage?.map((item, index) => (
              <div key={index} onClick={() => handleProductClick(item?.image)}>
                <img
                  src={item?.image}
                  className="w-20 h-20 rounded-md cursor-pointer"
                  alt="product details"
                />
              </div>
            ))}
          </div>
          <div className= " my-2 lg:mt-10 order-5 lg:order-5">
            <h1>Quantity:</h1>
            <div className="border-2 cursor-pointer mt-2 py-2 text-lg font-bold flex justify-between px-5 w-40">
              <div onClick={handleDecrement}>-</div>
              <div className="border-s-2 border-e-2 px-5">{count}</div>
              <div onClick={handleIncrement}>+</div>
            </div>
          </div>
          <div className=" my-2 lg:mt-5 order-6">
            <PrimaryButton title={"CheckOut"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

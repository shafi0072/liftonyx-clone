import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PrimaryButton from "@/src/Components/core/shared/PrimaryButton/PrimaryButton";

const Details = ({ id }) => {
  const [count, setCount] = useState(1);
  const [selectedProductImage, setSelectedProductImage] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const productData = localStorage.getItem("cart");
  const parseData = JSON.parse(productData);
  const product = parseData && parseData?.find((data) => data?.id === id);

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
    // Set the selected product's image when clicked
    setSelectedProductImage(image);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 mt-20">
      <div className="md:flex justify-between">
        <div>
          <img
            className="md:w-[650px] md:h-[700px] w-full h-full rounded-xl"
            src={selectedProductImage || product?.image[0]?.mainImage1}
            alt="product"
          />
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="text-4xl font-bold">{product?.title}</h1>
          <div className="mt-5">
            <Rating
              style={{ maxWidth: 100 }}
              value={product?.review}
              readOnly
            />
          </div>
          <h1 className="text-3xl font-semibold text-red-500 mt-5">
            tk: {calculateTotalPrice()}
          </h1>
          <div className="flex gap-5 mt-20">
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
    </div>
  );
};

export default Details;

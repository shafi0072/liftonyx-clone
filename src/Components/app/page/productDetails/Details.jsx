import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Details = ({ id }) => {
    console.log(id)
  const productData = localStorage.getItem("cart");
  const parseData = JSON.parse(productData);
  const product = parseData && parseData?.find((data) => data?.id === id);
  console.log(product);

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex gap-10">
        <div>
          <img
            className="w-3/4 h-[90%] rounded-xl"
            src="https://liftonyx.com/cdn/shop/files/1_800x.png?v=1699183048"
            alt="product"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">ONYX Bottle - 2.7L</h1>
          <div className="mt-5">
            <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
          </div>
          <h1 className="text-3xl font-semibold text-red-500 mt-5">
            tk: 2,090
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;

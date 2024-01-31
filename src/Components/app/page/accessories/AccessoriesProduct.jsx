import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { displayBottle } from "@/src/constant/home/onyxBottle";
import { FaPlus } from "react-icons/fa6";
import "@smastrom/react-rating/style.css";
import SecondaryButton from "@/src/Components/core/shared/SecondaryButton/SecondaryButton";
const AccessoriesProduct = () => {
  const [hoveredStates, setHoveredStates] = useState(
    Array(displayBottle.length)
      .fill(0)
      .map(() => Array(4).fill(false))
  );

  const handleMouseEnter = (itemIndex, imageIndex) => {
    const updatedStates = [...hoveredStates];
    updatedStates[itemIndex][imageIndex] = true;
    setHoveredStates(updatedStates);
  };

  const handleMouseLeave = (itemIndex, imageIndex) => {
    const updatedStates = [...hoveredStates];
    updatedStates[itemIndex][imageIndex] = false;
    setHoveredStates(updatedStates);
  };
  return (
    <div className="mt-10">
        {/* <h1>{itemIndex} Product</h1> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {displayBottle?.map((item, itemIndex) => (
          <div key={itemIndex}>
            {item?.image?.map((bottle, imageIndex) => (
              <div
                key={imageIndex}
                className="relative group w-full overflow-hidden rounded-md"
                onMouseEnter={() => handleMouseEnter(itemIndex, imageIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex, imageIndex)}
              >
                <img
                  className="w-full h-full"
                  src={
                    hoveredStates[itemIndex][imageIndex]
                      ? bottle?.bottle2Image
                      : bottle?.bottle1Image
                  }
                  alt="Product Image"
                />

                <div>
                  {hoveredStates[itemIndex][imageIndex] && (
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-white transition-opacity opacity-100 group-hover:opacity-100 transform group-hover:translate-y-[-14px]">
                      <SecondaryButton
                        title={
                          <>
                            <FaPlus /> Add to Cart
                          </>
                        }
                      ></SecondaryButton>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="my-5">
              <h2 className="text-center font-medium">{item?.title}</h2>
              <p className="text-center font-medium">{item?.money}</p>
              <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={item?.review}
                  readOnly
                />{" "}
                <span className="ml-3 font-medium">{item?.review} reviews</span>
              </div>
              <p className="text-center font-medium">{item?.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesProduct;

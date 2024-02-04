import React, { useState } from "react";
import SectionTitle from "../../core/shared/SectionTitle/SectionTitle";
import { displayBottle } from "@/src/constant/home/onyxBottle";
import SecondaryButton from "../../core/shared/SecondaryButton/SecondaryButton";
import { FaPlus } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { displayFlask } from "@/src/constant/home/onyxFlask";
import { productData } from "@/src/constant/Flask";

const OnyxFlask = () => {
  const [hoveredStates, setHoveredStates] = useState(
    Array(displayBottle.length)
      .fill(0)
      .map(() => Array(3).fill(false))
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
    <div className="max-w-5xl mx-auto px-3 py-14">
      <div className="pb-10">
        <SectionTitle
          subTitle={"THE FIRST MAGSAFE FLASK IN MALAYSIA"}
          title={"ONYX Flask"}
        ></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productData?.slice(0,3)?.map((item, itemIndex) => (
          <div key={itemIndex}>
            {item?.image?.map((flask, imageIndex) => (
              <div
                key={imageIndex}
                className="relative group w-full overflow-hidden"
                onMouseEnter={() => handleMouseEnter(itemIndex, imageIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex, imageIndex)}
              >
                <img
                  className="w-full h-full"
                  src={
                    hoveredStates[itemIndex][imageIndex]
                      ? flask?.bottle1Image
                      : flask?.bottle2Image
                  }
                  alt="Product Image"
                />

                <div>
                  {hoveredStates[itemIndex][imageIndex] && (
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-white transition-opacity opacity-100 group-hover:opacity-100 transform group-hover:translate-y-[-14px]">
                      <SecondaryButton
                      item={item}
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

export default OnyxFlask;

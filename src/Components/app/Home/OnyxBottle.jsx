import React, { useState } from "react";
import SectionTitle from "../../core/shared/SectionTitle/SectionTitle";
import { displayBottle } from "@/src/constant/home/onyxBottle";
import SecondaryButton from "../../core/shared/SecondaryButton/SecondaryButton";
import { FaPlus } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { productData } from "@/src/constant/allProductData";
import Link from "next/link";
import Image from "next/image";

const OnyxBottle = () => {
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
    <div className="max-w-5xl mx-auto px-3 pt-14  pb-6">
      <div className=" pb-10  text-black">
        <SectionTitle
          subTitle={"THE FIRST TRIPOD BOTTLE IN MALAYSIA"}
          title={"ONYX Bottle"}
        ></SectionTitle>
      </div>

      <div className=" overflow-x-auto  flex gap-3 max-w-2xl lg:max-w-full ">
        {productData?.slice(8, 11)?.map((item, itemIndex) => (
          <div
            className="min-w-[60vw] lg:min-w-[30%]  w-full ml-3"
            key={itemIndex}
          >
            {item?.image?.map((bottle, imageIndex) => (
              <div
                key={imageIndex}
                className="relative group w-full overflow-hidden"
                onMouseEnter={() => handleMouseEnter(itemIndex, imageIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex, imageIndex)}
              >
                <div className="p-1">
                  <Link
                    className="w-full "
                    href={`/productDetails/${item?.id}`}
                  >
                    <Image
                      height={100}
                      width={100}
                      className="w-full h-full rounded-md "
                      src={
                        hoveredStates[itemIndex][imageIndex]
                          ? bottle?.mainImage2
                          : bottle?.mainImage1
                      }
                      alt="Product Image"
                    />
                  </Link>
                </div>

                <div>
                  {hoveredStates[itemIndex][imageIndex] && (
                    <div className="absolute w-full bottom-1 flex flex-col justify-end items-center text-white  transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 transform  group-hover:translate-y-[-14px]">
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

            <div className="my-5 ">
              <h2 className="text-center font-medium">{item?.title}</h2>
              <div className="flex justify-center gap-4 w[70%] mx-auto">
                <p className="text-center font-medium">TK {item?.money}</p>
                <p className="text-center font-semibold line-through">
                  TK {item?.money}
                </p>
              </div>
              {/* <p className="text-center font-medium">{parseInt(item?.money * 0.1)}</p> */}
              {/* <p className="text-center font-medium">{parseInt(Number(item?.money) * 0.1)}</p> */}
              {/* <div>
  {item && (
    <p className="text-center font-medium">
      {parseInt(item.money) }-{parseFloat(item.money) * 0.1}
    </p>
  )}
</div> */}

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

export default OnyxBottle;

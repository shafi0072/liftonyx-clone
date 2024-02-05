import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaPlus } from "react-icons/fa6";
import "@smastrom/react-rating/style.css";
import SecondaryButton from "@/src/Components/core/shared/SecondaryButton/SecondaryButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const featured = [
  {
    title: "Featured",
  },
  {
    title: "Best Selling",
  },
  {
    title: "Alphabetically",
  },
  {
    title: "Alphabetically, A-Z",
  },
  {
    title: "Price, Low to High",
  },
  {
    title: "Price, High to Low",
  },
  {
    title: "Date, New to Old",
  },
  {
    title: "Date, Old to New",
  },
];

const FlaskProduct = ({product}) => {
  

  const [hoveredStates, setHoveredStates] = useState(
    Array(product?.length)
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
    <div className="mt-5">
      <div className="flex justify-between mb-3">
        <div>
          <h1>{product?.length} product</h1>
        </div>
        <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <div {...bindTrigger(popupState)} className="flex items-center">
                  <h1>
                    Sort by{" "}
                    <span className="font-medium cursor-pointer">Featured</span>
                  </h1>
                  <ArrowDropDownIcon className="cursor-pointer" />
                </div>
                <Menu {...bindMenu(popupState)}>
                  {featured.map((list, index) => (
                    <MenuItem key={index} onClick={popupState.close}>
                      {list?.title}
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {product?.map((item, itemIndex) => (
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
                      ? bottle?.mainImage2
                      : bottle?.mainImage1
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

export default FlaskProduct;

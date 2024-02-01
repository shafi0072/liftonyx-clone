import { bannerButtonText, bannerImage } from "@/src/constant/home/home";
import React from "react";
import PrimaryButton from "../../core/shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className=" relative">
      <div>
        <img className="w-full" src={bannerImage} alt="Banner Image" />
      </div>
      <div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <PrimaryButton title={bannerButtonText}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
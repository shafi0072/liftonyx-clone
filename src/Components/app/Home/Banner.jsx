import { bannerButtonText, bannerImage } from "@/src/constant/home/home";
import React from "react";
import PrimaryButton from "../../core/shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className=" relative h-full  mx-auto w-full mt-28 lg:mt-28">
      <div className="w-full relative pb-[65vh] md:pb-[80vh] lg:pb-[80vh]   ">
        <img
          className="w-full aspect-square object-cover object-center absolute  lg:aspect-auto h-full "
          src={bannerImage}
          alt="Banner Image"
        />
      </div>
      <div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <PrimaryButton title={bannerButtonText}></PrimaryButton>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;

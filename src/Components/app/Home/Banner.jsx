import { bannerButtonText, bannerImage } from "@/src/constant/home/home";
import React from "react";
import PrimaryButton from "../../core/shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className=" relative h-full  mx-auto w-full mt-36 lg:mt-28">
      {/* <div className="w-full h-full relative pb-[65vh] overflow-hidden md:pb-[80vh] lg:pb-[80vh]   ">
        <img
          className=" hidden lg:block w-full  aspect-w-9 aspect-h-16 object-cover object-center lg:object-fill absolute   h-full "
          src={bannerImage}
          alt="Banner Image"
        />
        <img
          className=" block lg:hidden w-full   object-cover object-center lg:object-fill absolute   h-full "
          src={
            "https://liftonyx.com/cdn/shop/files/The_First_Tripod_Bottle_in_Malaysia_18.png?v=1699293576&width=1600"
          }
          alt="Banner Image"
        />
      </div> */}
      <div className="w-full h-full ">
        <img
          className=" hidden lg:block w-full  object-cover object-center   h-full "
          src={bannerImage}
          alt="Banner Image"
        />
        <img
          className=" lg:hidden block w-full -mt-4  object-cover object-center   h-full "
          src={
            "https://liftonyx.com/cdn/shop/files/The_First_Tripod_Bottle_in_Malaysia_18.png?v=1699293576&width=1600"
          }
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

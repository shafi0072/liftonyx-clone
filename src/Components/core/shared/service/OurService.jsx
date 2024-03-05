import { serviceData } from "@/src/constant/service/service";
import { useRouter } from "next/router";
import React from "react";

const OurService = () => {
  const router = useRouter();
  const name = router?.pathname;

  return (
    <div
      className={` py-5 lg:py-20 bg-gray-100 ${
        name === "/" ? "mt-3 lg:mt-14" : ""
      }`}
    >
      <div className=" overflow-x-auto lg:overflow-x-hidden  flex gap-3 max-w-2xl lg:max-w-full">
        {serviceData?.map((image, index) => (
          <div className="" key={index}>
            <img
              className=" min-w-[23vw] max-w-[20vw] lg:min-w-[7vw]  w-full ml-3"
              src={image?.image}
              alt="service image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;

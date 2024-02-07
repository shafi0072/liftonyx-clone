import { serviceData } from "@/src/constant/service/service";
import { useRouter } from "next/router";
import React from "react";

const OurService = () => {
  const router = useRouter();
  const name = router?.pathname;

  return (
    <div className={`py-20 bg-gray-100 ${name === "/" ? "mt-14" : ""}`}>
      <div className="max-w-screen-xl mx-auto flex justify-evenly">
        {serviceData?.map((image, index) => (
          <div key={index}>
            <img className="h-32" src={image?.image} alt="service image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;

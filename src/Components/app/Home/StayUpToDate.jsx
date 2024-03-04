import {
  stayUpToDateHeading,
  stayUpToDateImage1,
  stayUpToDateImage1Description,
  stayUpToDateRightSection,
  stayUpToDateSubHeading,
} from "@/src/constant/home/stayUpToDate";
import SectionTitle from "../../core/shared/SectionTitle/SectionTitle";
import { IoArrowForward } from "react-icons/io5";
import { useState } from "react";



const StayUpToDate = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto px-3 py-20">
      <div className="pb-10">
        <SectionTitle
          subTitle={stayUpToDateSubHeading}
          title={stayUpToDateHeading}
        ></SectionTitle>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div style={{ position: 'relative', display: 'inline-block' }} className="lg:w-[45%]">
          
        {/* <div style={{ position: 'relative', display: 'inline-block' }}> */}
      <img  className="w-full h-full rounded-xl" src={stayUpToDateImage1} alt="" />
      <button
        className={`btn absolute right-5 bottom-5 ${isVisible ? '' : 'opacity-0'}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <IoArrowForward />
      </button>
    {/* </div> */}
         
          <h2 className="text-4xl mt-8 font-semibold mx-1">
            {stayUpToDateImage1Description}
          </h2>
        </div>

        <div className="lg:w-[45%]">
          {stayUpToDateRightSection?.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-5 mb-10">
              <div className="flex-1 relative">
                <img className="rounded-xl" src={item?.stayUpToDateImage} alt="" />


<button
      className={`btn absolute right-5 bottom-5 ${isVisible ? '' : 'opacity-0 '}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <IoArrowForward />
    </button>

              </div>
              <div className="flex-1 flex items-center">
                <div>
                  <p className="text-sm font-medium">
                    {item?.stayUpToDateHeading}
                  </p>
                  <h2 className="text-2xl font-semibold">
                    {item?.stayUpToDateImageDescription}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StayUpToDate;

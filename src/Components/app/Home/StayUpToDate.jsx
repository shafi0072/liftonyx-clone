import {
  stayUpToDateHeading,
  stayUpToDateImage1,
  stayUpToDateImage1Description,
  stayUpToDateRightSection,
  stayUpToDateSubHeading,
} from "@/src/constant/home/stayUpToDate";
import SectionTitle from "../../core/shared/SectionTitle/SectionTitle";
import { FaArrowRight } from "react-icons/fa6";

const StayUpToDate = () => {
  // console.log(stayUpToDateImage1Description);
  return (
    <div className="max-w-screen-xl mx-auto px-3 py-6 lg:py-20">
      <div className="pb-10">
        <SectionTitle
          subTitle={stayUpToDateSubHeading}
          title={stayUpToDateHeading}
        ></SectionTitle>
      </div>

      <div className="flex gap-3 max-w-2xl lg:min-w-full overflow-x-auto scroll-m-0 lg:gap-10">
        <div className=" min-w-[80vw] lg:min-w-[55%] lg:w-[55%] overflow-hidden rounded-xl">
          <img
            className="w-full h-auto  ease-in-out hover:scale-105 duration-300 rounded-xl"
            src={stayUpToDateImage1}
            alt=""
          />
          <h2 className=" text-xl lg:text-4xl mt-4 lg:mt-8 font-semibold mx-1">
            {stayUpToDateImage1Description}
          </h2>
        </div>

        <div className=" w-full lg:w-[45%] flex h-auto flex-row lg:flex-col gap-3">
          {stayUpToDateRightSection?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[80vw] lg:w-full  md:flex-row gap-5 mb-2 lg:mb-10"
            >
              <div className="flex-1 group w-[80vw] lg:w-full h-full rounded-xl overflow-hidden relative">
                <img
                  className=" hover:scale-105 h-auto  w-full  duration-500 rounded-xl"
                  src={item?.stayUpToDateImage}
                  alt=""
                />

                <div className=" bg-white   p-4 rounded-md  right-3 bottom-3 absolute    opacity-0 duration-500 transition  ease-out  group-hover:opacity-100 ">
                  <FaArrowRight className="text-2xl "></FaArrowRight>
                </div>
              </div>
              <div className="flex-1 flex items-start lg:items-center">
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

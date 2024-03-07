import React from "react";
import Lottie from "lottie-react";
// import AnimationData from "../../../../public/assets/animation/Animation.json";
import AnimationData from "../../../../public/assets/animation/Animation .json";

const Animation = () => {
  return (
    <div className="">
      <div>
        <div className="fixed -rotate-90 w-[150px] h-[120px] top-1/2 -left-4 transform text-center justify-center  z-30">
          {/* <Lottie animationData={AnimationData} /> */}
          <div className=" bg-black border-white text-white rounded-md p-2 flex justify-center">
            <h1 className=" text-white  flex ">
              <span>10% OFF</span> <span> 👀</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="fixed w-20 h-20 lg:w-[120px] lg:h-[120px] top-1/2 right-0 lg:-right-4 transform -translate-y-1/2 z-50">
        <Lottie animationData={AnimationData} />
      </div>
    </div>
  );
};

export default Animation;

import React from 'react';
import Lottie from "lottie-react";
import AnimationData from "../../../../public/assets/animation/Animation .json";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Animation = () => {
    return (
        <div className=''>
            <div>
            <div className="fixed w-[120px] h-[120px] top-1/2 left-4 transform -translate-y-1/2 z-50">
            {/* <Lottie animationData={AnimationData} /> */}
          <div className='flex bg-black text-white rounded-md p-2'>
          <h1 className=' text-white p-2  '>10% OFF</h1>
          <MdOutlineRemoveRedEye />
          </div>
        </div>
            </div>
            <div className="fixed w-[120px] h-[120px] top-1/2 right-4 transform -translate-y-1/2 z-50">
            <Lottie animationData={AnimationData} />
        </div>
        </div>
    );
};

export default Animation;

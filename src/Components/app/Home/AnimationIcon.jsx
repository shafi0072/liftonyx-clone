import React from 'react';
import Lottie from "lottie-react";
import AnimationData from "../../../../public/assets/animation/Animation .json";

const Animation = () => {
    return (
        <div className="fixed w-[120px] h-[120px] top-1/2 right-4 transform -translate-y-1/2 z-50">
            <Lottie animationData={AnimationData} />
        </div>
    );
};

export default Animation;

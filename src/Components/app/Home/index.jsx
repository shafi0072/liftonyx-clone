import React from "react";
import Banner from "./Banner";
import OnyxBottle from "./OnyxBottle";
import IntroducingFlask from "./IntroducingFlask";
import OnyxFlask from "./OnyxFlask";
import WhyWeCreatedOnyx from "./WhyWeCreatedOnyx";
import StayUpToDate from "./StayUpToDate";
import OurService from "../../core/shared/service/OurService";
import AnimationIcon from "./AnimationIcon";

//  import Lottie from "lottie-react";
// import Animation from "../../../../public/assets/animation/Animation .json";

const index = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      
      <OnyxBottle />
      <IntroducingFlask />
      <OnyxFlask />
      <WhyWeCreatedOnyx />
      <StayUpToDate />
      <OurService/>
     <AnimationIcon></AnimationIcon>
      
    </div>
  );
};

export default index;

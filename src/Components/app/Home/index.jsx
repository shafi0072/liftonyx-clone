import React from "react";
import Banner from "./Banner";
import OnyxBottle from "./OnyxBottle";
import IntroducingFlask from "./IntroducingFlask";
import OnyxFlask from "./OnyxFlask";
import WhyWeCreatedOnyx from "./WhyWeCreatedOnyx";
import StayUpToDate from "./StayUpToDate";
import OurService from "../../core/shared/service/OurService";

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
    </div>
  );
};

export default index;

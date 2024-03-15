import { introducingFlaskButtonText } from "@/src/constant/home/onyxFlask";
import SecondaryButton from "../../core/shared/SecondaryButton/SecondaryButton";
import Image from "next/image";
import introducingFlaskImage from "../../../../public/assets/flask/introduceFlask.webp";

const IntroducingFlask = () => {
  return (
    <div className=" relative">
      <div>
        <Image
          height={500}
          width={800}
          className=" hidden lg:block w-full object-cover object-center h-full"
          src={introducingFlaskImage}
          alt="Banner Image"
        />
        <img
          className=" block lg:hidden w-full object-cover object-center h-full"
          src={
            "https://liftonyx.com/cdn/shop/files/The_First_Tripod_Bottle_in_Malaysia-19.png?v=1703091890&width=800"
          }
          alt="Banner Image"
        />
      </div>
      <div>
        <div className="absolute w-[180px] bottom-10 left-1/2 transform -translate-x-1/2">
          <SecondaryButton title={"Shop Flask"}></SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default IntroducingFlask;

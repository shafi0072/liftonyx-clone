import {
  introducingFlaskButtonText
} from "@/src/constant/home/onyxFlask";
import SecondaryButton from "../../core/shared/SecondaryButton/SecondaryButton";
import Image from "next/image";
import introducingFlaskImage from "../../../../public/assets/flask/introduceFlask.webp"

const IntroducingFlask = () => {
  return (
    <div className=" relative">
      <div>
        <Image
          height={500}
          width={800}
          className="aspect-[.7] lg:aspect-auto w-full h-full"
          src={introducingFlaskImage}
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

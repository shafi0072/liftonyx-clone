import {
  introducingFlaskButtonText,
  introducingFlaskImage,
} from "@/src/constant/home/onyxFlask";
import SecondaryButton from "../../core/shared/SecondaryButton/SecondaryButton";

const IntroducingFlask = () => {
  return (
    <div className=" relative">
      <div>
        <img
          className="w-full"
          src={introducingFlaskImage}
          alt="Banner Image"
        />
      </div>
      <div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <SecondaryButton title={introducingFlaskButtonText}></SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default IntroducingFlask;
import {
  whyWeCreatedOnyxButtonText,
  whyWeCreatedOnyxDescription,
  whyWeCreatedOnyxImage,
  whyWeCreatedOnyxSubTitle,
  whyWeCreatedOnyxTitle,
} from "@/src/constant/home/WhyWeCreatedOnyx";
import SecondaryButton from "../../core/shared/SecondaryButton/SecondaryButton";

const WhyWeCreatedOnyx = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto px-3">
        <img
          className="lg:absolute lg:top-12 w-full lg:w-[500px] rounded-xl"
          src={whyWeCreatedOnyxImage}
          alt=""
        />
      </div>

      <div className="bg-black text-white container lg:ml-[38%] p-4 lg:p-20 lg:px-36">
        <div className="w-full lg:max-w-lg">
          <h3 className="text-sm font-medium text-center my-3">
            {whyWeCreatedOnyxSubTitle}
          </h3>
          <h1 className="text-4xl font-semibold text-center mb-3">
            {whyWeCreatedOnyxTitle}
          </h1>
          <p className="text-sm font-medium text-center">
            {whyWeCreatedOnyxDescription}
          </p>

          <div className="my-6  lg:my-10 flex justify-center">
            <SecondaryButton
              title={whyWeCreatedOnyxButtonText}
            ></SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeCreatedOnyx;

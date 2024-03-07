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
      <div className="max-w-screen-xl -mb-6 mx-10 lg:mr-28 px-3">
        <img
          className="lg:absolute lg:top-12   w-full lg:w-[500px] rounded-xl"
          src={whyWeCreatedOnyxImage}
          alt=""
        />
      </div>

      <div className="bg-black text-white container lg:ml-[22vw] text-center p-8 lg:p-20 ">
        <div className="w-full mx-auto pl-6 lg:max-w-lg">
          <h3 className="text-sm font-medium text-center my-3">
            {whyWeCreatedOnyxSubTitle}
          </h3>
          <h1 className="lg:text-4xl text-3xl font-semibold text-center mb-3">
            {whyWeCreatedOnyxTitle}
          </h1>
          <p className="text-sm px-3 font-medium text-center">
            {whyWeCreatedOnyxDescription}
          </p>

          <div className="my-6 px-16 lg:px-28 lg:my-10 flex justify-center">
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

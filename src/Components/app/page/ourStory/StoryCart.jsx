import { storyCart } from "@/src/constant/ourStory/story";
import React from "react";

const StoryCart = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-16">
        {storyCart?.map((content, index) => (
          <div key={index} className="md:flex justify-between  mb-20">
            <div
              className={`text-center md:w-3/6 mb-5 md:mb-0 mt-20 ${
                index !== 0 ? "order-2" : ""
              }`}
            >
              <h1 className="font-medium">{content?.subTitle}</h1>
              <h1 className="text-3xl font-bold my-5">{content?.title}</h1>
              <p className="mb-5 px-5 md:px-0">{content?.description1}</p>
              <p className="px-5 md:px-0">{content?.description2}</p>
            </div>
            <div className={`flex ${index === 0 ? " justify-end" : ""}`}>
              <img
                className="md:w-3/4 px-5 md:px-0 rounded-md"
                src={content?.image}
                alt="story image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryCart;

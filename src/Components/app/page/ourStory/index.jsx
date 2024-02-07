import {
  onyxDescription,
  onyxTitle,
} from "@/src/constant/ourStory/story";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import StoryCart from "./StoryCart";
import StoryBanner from "./StoryBanner";
import OurService from "@/src/Components/core/shared/service/OurService";

const OurStory = () => {
  const router = useRouter();
  const pathName = router?.pathname;
  return (
    <div>
      <div className="mt-3 px-5">
        <Link className="uppercase" href={"/"}>
          Home
        </Link>{" "}
        <Link className="" href={`/${pathName}`}>
          {pathName}
        </Link>
      </div>
      <div className="my-10">
        <h1 className="font-semibold text-center">Our Story</h1>
      </div>
      <div className="bg-black py-14">
        <div className="w-3/6 mx-auto">
          <h1 className="text-center text-white font-bold mb-5">
            [ {onyxTitle} ]
          </h1>
          <p className="text-center text-white">{onyxDescription}</p>
        </div>
      </div>
      <StoryCart/>
      <StoryBanner/>
      <OurService/>
    </div>
  );
};

export default OurStory;

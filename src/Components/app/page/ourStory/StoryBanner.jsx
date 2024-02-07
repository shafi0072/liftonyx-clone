import Link from "next/link";
import React from "react";

const StoryBanner = () => {
  return (
    <div>
      <div className="bg-black py-10">
        <div className="text-center text-white">
          <h1 className="font-medium">[WELCOME TO THE CLUB]</h1>
          <h1 className="text-4xl font-bold mt-5">#liftonyx</h1>
          <h2 className="text-lg font-bold my-5">
            By using ONYX you become part of our community (#liftonyx)
          </h2>
          <p>
            - a community where individuals support each other & share a common
            passion for fitness and aesthetics.
          </p>
        </div>
        <div className="text-center mt-5">
          <Link
            href={"/bottle"}
            className="btn bg-white text-black border border-white hover:border-none transition-all transform hover:-translate-y-1 hover:bg-gray-100"
          >
            BACK TO SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryBanner;

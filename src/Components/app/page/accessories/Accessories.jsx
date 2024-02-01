import Link from "next/link";
import React from "react";
import AccessoriesProduct from "./AccessoriesProduct";
import Filter from "./Filter";

const Accessories = () => {
  return (
    <div className="w-full px-5 md:flex max-w-screen-xl mx-auto">
      <div className="md:w-3/12 w-full">
        <div className="mt-3">
          <Link href={"/"}>Home</Link> /
          <Link href={"/accessories"}>Accessories</Link>
        </div>
        <div className="md:mt-32 mt-10">
          <h1 className="text-3xl md:block hidden font-semibold">Filter</h1>
          <div>
            <Filter/>
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-3/4 w-full">
        <h1 className="md:text-5xl text-2xl font-semibold text-center w-full md:w-3/4">
          Accessories
        </h1>
        <AccessoriesProduct />
      </div>
    </div>
  );
};

export default Accessories;
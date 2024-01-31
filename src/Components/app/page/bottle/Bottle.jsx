import Link from "next/link";
import React from "react";
import Filter from "../accessories/Filter";
import AccessoriesProduct from "../accessories/AccessoriesProduct";

const Bottle = () => {
  return (
    <div className="w-full px-5 md:flex h-screen">
      <div className="md:w-3/12 w-full">
        <div className="mt-3">
          <Link href={"/"}>Home</Link> /
          <Link href={"/bottle"}>Bottle</Link>
        </div>
        <div className="mt-32 ">
          <h1 className="text-3xl md:block hidden font-semibold ps-2">
            Filter
          </h1>
          <div>
            <Filter />
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-3/4 w-full">
        <h1 className="md:text-7xl text-2xl font-semibold text-center w-full md:w-3/4">
          Bottles
        </h1>
        <AccessoriesProduct />
      </div>
    </div>
  );
};

export default Bottle;

import React from "react";
import Link from "next/link";
import FlaskProduct from "./Product";
import { useRouter } from "next/router";
import Filter from "./Filter";
import { productData } from "@/src/constant/allProductData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Flask = () => {
  const router = useRouter();

  const pathname = router.pathname;
  const name = pathname.slice(1);

  const product =
    productData &&
    productData?.filter((singleProduct) => singleProduct?.category === name);

  return (
    <div className="w-full px-9 md:flex">
      <div className="md:w-3/12 w-full">
        <div className="mt-5">
          <Link className="font-normal text-[#282828] text-[13px]" href={"/"}>
            Home
          </Link>{" "}
          /
          <Link
            className="uppercase  text-[#282828] text-[13px]"
            href={`/${name}`}
          >
            {name}
          </Link>
        </div>
        <div className="mt-32">
          <h1 className="text-[27px] md:w-[322px] pb-3 md:block hidden font-semibold border-b border-slate-300 py-2">
            Filters
          </h1>
          <div>
            <Filter product={product} />
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-3/4 w-full">
        <h1 className="md:text-[56px] my-5 pb-9 pt-1 text-2xl uppercase font-semibold text-center w-full md:w-3/4">
          {name}
        </h1>
        <FlaskProduct product={product} />
      </div>

      {/* flag dropdown */}

      <div className= "cursor-pointer left-6 bottom-10 fixed w-[115px] h-[47px] rounded-md shadow-xl border  bg-white">
        <div className="flex p-[11px] items-center justify-center gap-[5px]">
          <img
            className="h-[19px] rounded-sm opacity-80 w-[29px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png"
            alt=""
          />
          <span className="text-slate-500 text-[15px]">BDT</span>
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Flask;

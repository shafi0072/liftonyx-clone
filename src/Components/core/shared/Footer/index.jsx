import { footerData, footerLogo } from "@/src/constant/footer";
import { logo } from "@/src/constant/home/home";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  const name = router?.pathname;
  return (
    <div className={`bg-black px-10 py-20 `}>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-white">
        <div className="order-1">
          <img src={footerLogo} alt="logo" />
        </div>
        {footerData?.map((item, index) => (
          <div key={index} className={`lg:order-${index+1} `} >
            <h1 className="text-xl font-semibold mb-3">{item?.title}</h1>
            <ul className="space-y-2">
              {item?.list?.map((name) => (
                <Link href={name?.link}>
                  <li className="cursor-pointer text-sm lg:text-base my-2 hover:text-slate-300 duration-200">
                    {name?.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;

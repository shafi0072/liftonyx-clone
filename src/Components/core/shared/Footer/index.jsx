import { footerData, footerLogo } from "@/src/constant/footer";
import { logo } from "@/src/constant/home/home";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SiApplepay } from "react-icons/si";


const index = () => {
  const router = useRouter();
  const name = router?.pathname;
  return (
    <div className={`bg-black px-10 py-20 `}>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-white">
        <div className="">
          <img src={footerLogo} alt="logo" />
        </div>
        {footerData?.map((item, index) => (
          <div key={index}>
            <h1 className="text-xl font-semibold mb-3">{item?.title}</h1>
            <ul className="space-y-2 ">
              {item?.list?.map((name) => (
                <Link href={name?.link}>
                  <li className="cursor-pointer mb-3 hover:text-slate-300 duration-200">
                    {name?.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex gap-8 ">
   
<div className="collapse w-[20%]  collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Bangladesh
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div>
<h1 className="text-white">ONYX <span className="text-3xl">.</span> </h1>
</div>
<div className="flex ml-[600px]">
  <h1 className="gap-3  text-white">We accept</h1>
  <div className="text-white">
  <SiApplepay />
  </div>
 
</div>

      </div>
    </div>
  );
};

export default index;

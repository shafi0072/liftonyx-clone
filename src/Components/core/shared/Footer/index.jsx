import { footerData, footerLogo } from "@/src/constant/footer";
import { logo } from "@/src/constant/home/home";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import applePayLogo from "../../../../../public/assets/footerImage/Apple-Pay-Card-Image.png"
import masterCardLogo from "../../../../../public/assets/footerImage/Mastercard_logo.0.jpg"
import visaLogo from "../../../../../public/assets/footerImage/visa_card.jpg"
const index = () => {
  const router = useRouter();
  const name = router?.pathname;
  return (
    <div className={`bg-black px-10 py-20 w-full mx-auto `}>
      <div className="grid grid-cols-2 w-full mx-auto md:grid-cols-4 lg:grid-cols-5 text-white">
        <div className="">
          <img src={footerLogo} alt="logo" />
        </div>
        <div className="block  w-full lg:hidden"></div>
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
      <div className="flex gap-8 my-5 bg-black flex-col justify-self-start lg:flex-row lg:px-3 lg:justify-between lg:items-center w-full  ">
        <div className="flex gap-3 w-full">
          {/* <div className="collapse w-[20%]  collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Bangladesh</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div> */}
          <div>
            <h1 className="text-white text-sm lg:text-base">
              ONYX <span className="  text-3xl">.</span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex  w-full  flex-col lg:flex-row lg:justify-center lg:items-center gap-3  ">
          <h1 className="  text-white">We accept</h1>
          <div className="flex justify-left items-center gap-3">
            <Image
              width={35}
              height={25}
              alt="apple_pay_logo"
              className="bg-white px-1"
              src={applePayLogo}
            ></Image>
            <Image
              width={35}
              height={25}
              alt="master_Card_logo"
              className="bg-white px-1"
              src={masterCardLogo}
            ></Image>
            <Image
              width={35}
              height={25}
              alt="visa_card_logo"
              className="bg-white px-1"
              src={visaLogo}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

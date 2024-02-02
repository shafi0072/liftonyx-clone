import { imageIcon } from "@/src/constant/home/FooterTop";
import React from "react";

const FooterTop = () => {
  return (
    <div className="bg-gray-300">
      {imageIcon?.map((item, index) => {
        <div key={index}>
          <img src='https://liftonyx.com/cdn/shop/files/Leakproof_3_300x.png?v=1685880276' alt="" />;
        </div>;
      })}
    </div>
  );
};

export default FooterTop;

import { imageIcon } from "@/src/constant/home/FooterTop";
import React from "react";

const FooterTop = () => {
  return (
    <div>
      {imageIcon?.map((item, index) => {
        <div key={index}>
          <img src={item?.image} alt="" />;
        </div>;
      })}
    </div>
  );
};

export default FooterTop;

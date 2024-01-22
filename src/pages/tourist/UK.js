import React from "react";
import MinorBanner from "../../shared/components/banner/MinorBanner";
import banner from "../../shared/img/visa-application-composition-with-different-flags.jpg";
import HeadingHtml from "../../shared/components/htmlText/HeadingHtml";
import ParaHtml from "../../shared/components/htmlText/ParaHtml";
import { united_kingdom_tourist } from "../../data/UKService";
const UKTourist = () => {
  let { headingOne, paraOne } = united_kingdom_tourist;
  return (
    <>
      {" "}
      <MinorBanner banner={banner} title={"United Kingdom Tourist Visa"} />
      <div className="container mt-5">
        <div className="html-text-box">
          <HeadingHtml heading={headingOne} />
          <ParaHtml paras={paraOne} />
        </div>
      </div>
    </>
  );
};

export default UKTourist;

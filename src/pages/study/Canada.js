import React from "react";
import MinorBanner from "../../shared/components/banner/MinorBanner";
import banner from "../../shared/img/ivaas_outsourcing_canada_banner.jpg";
import HeadingHtml from "../../shared/components/htmlText/HeadingHtml";
import ParaHtml from "../../shared/components/htmlText/ParaHtml";
import { canada_study } from "../../data/CanadaService";
const CanadaStudy = () => {
  let { headingOne, paraOne } = canada_study;
  return (
    <>
      {" "}
      <MinorBanner banner={banner} title={"Canada Study Visa"} />
      <div className="container mt-5">
        <div className="html-text-box">
          <HeadingHtml heading={headingOne} />
          <ParaHtml paras={paraOne} />
        </div>
      </div>
    </>
  );
};

export default CanadaStudy;

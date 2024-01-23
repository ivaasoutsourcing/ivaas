import React from "react";
import MinorBanner from "../../shared/components/banner/MinorBanner";
import banner from "../../shared/img/visa-application-composition-with-different-flags.jpg";
import HeadingHtml from "../../shared/components/htmlText/HeadingHtml";
import ParaHtml from "../../shared/components/htmlText/ParaHtml";
import { schengen_touist } from "../../data/EuropeService";
import SubHeadingHtml from "../../shared/components/htmlText/SubHeadingHtml";
import OrderHtml from "../../shared/components/htmlText/OrderHtml";
const SchengenTourist = () => {
  let { headingOne, paraOne, subParaListOne, subParaOne } = schengen_touist;
  return (
    <>
      {" "}
      <MinorBanner banner={banner} title={"United Kingdom Tourist Visa"} />
      <div className="container mt-5">
        <div className="html-text-box">
          <HeadingHtml heading={headingOne} />
          <ParaHtml paras={paraOne} />
          <SubHeadingHtml subHeading={subParaOne} />
          <OrderHtml isOrder={true} orderList={subParaListOne} />
        </div>
      </div>
    </>
  );
};

export default SchengenTourist;

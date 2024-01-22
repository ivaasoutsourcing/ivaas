import React from "react";
import MinorBanner from "../../shared/components/banner/MinorBanner";
import banner from "../../shared/img/visa-application-composition-with-different-flags.jpg";
import HeadingHtml from "../../shared/components/htmlText/HeadingHtml";
import ParaHtml from "../../shared/components/htmlText/ParaHtml";
import OrderHtml from "../../shared/components/htmlText/OrderHtml";
import SubHeadingHtml from "../../shared/components/htmlText/SubHeadingHtml";
import { canada_tourist } from "../../data/CanadaService";
const CanadaTourist = () => {
  let {
    headingOne,
    paraOne,
    listOne,
    listTwo,
    paraOneSubParaOne,
    subHeadingOne,
  } = canada_tourist;
  return (
    <>
      {" "}
      <MinorBanner banner={banner} title={"Canada Tourist Visa"} />
      <div className="container mt-5">
        <div className="html-text-box">
          <HeadingHtml heading={headingOne} />
          <ParaHtml paras={paraOne} />
          <OrderHtml isOrder={false} orderList={listOne} />
          <ParaHtml paras={paraOneSubParaOne} />
          <SubHeadingHtml subHeading={subHeadingOne} />
          <OrderHtml isOrder={false} orderList={listTwo} />
        </div>
      </div>
    </>
  );
};

export default CanadaTourist;

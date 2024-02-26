import React from "react";
import MinorBanner from "../../shared/components/banner/MinorBanner";
import banner from "../../shared/img/ivaas_outsourcing_canada_banner.jpg";
import HeadingHtml from "../../shared/components/htmlText/HeadingHtml";
import ParaHtml from "../../shared/components/htmlText/ParaHtml";
import OrderHtml from "../../shared/components/htmlText/OrderHtml";
import { canada_immigration } from "../../data/CanadaService";
const CanadaImmigration = () => {
  let {
    headingOne,
    paraOne,
    headingTwo,
    paraTwo,
    listTwo,
    paraTwoSubPara,
    headingThree,
    paraThree,
    listThree,
  } = canada_immigration;
  return (
    <>
      {" "}
      <MinorBanner banner={banner} title={"Canada PR Visa"} />
      <div className="container mt-5">
        <div className="html-text-box">
          <HeadingHtml heading={headingOne} />
          <ParaHtml paras={paraOne} />
        </div>
        <div className="html-text-box">
          <HeadingHtml heading={headingTwo} />
          {/* <SubHeadingHtml subHeading={subheading1} /> */}
          <ParaHtml paras={paraTwo} />
          <OrderHtml isOrder={false} orderList={listTwo} />
          <ParaHtml paras={paraTwoSubPara} />
        </div>
        <div className="html-text-box">
          <HeadingHtml heading={headingThree} />
          {/* <SubHeadingHtml subHeading={subheading2} /> */}
          <ParaHtml paras={paraThree} />
          <OrderHtml isOrder={false} orderList={listThree} />
        </div>
      </div>
    </>
  );
};

export default CanadaImmigration;

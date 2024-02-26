import React from "react";
import MinorBanner from "../../shared/components/banner/MinorBanner";
import banner from "../../shared/img/ivaas_outsourcing_united_state_banner.jpg";
import HeadingHtml from "../../shared/components/htmlText/HeadingHtml";
import ParaHtml from "../../shared/components/htmlText/ParaHtml";
import OrderHtml from "../../shared/components/htmlText/OrderHtml";
import SubHeadingHtml from "../../shared/components/htmlText/SubHeadingHtml";
import { usa_tourist } from "../../data/USAService";
const USATourist = () => {
  let { headingOne, paraOne, listOne, listTwo, subHeadingOne, subHeadingTwo } =
    usa_tourist;
  return (
    <>
      {" "}
      <MinorBanner banner={banner} title={"USA Tourist Visa"} />
      <div className="container mt-5">
        <div className="html-text-box">
          <HeadingHtml heading={headingOne} />
          <ParaHtml paras={paraOne} />
          <SubHeadingHtml subHeading={subHeadingOne} />
          <OrderHtml isOrder={true} orderList={listOne} />
          <SubHeadingHtml subHeading={subHeadingTwo} />
          <OrderHtml isOrder={true} orderList={listTwo} />
        </div>
      </div>
    </>
  );
};

export default USATourist;

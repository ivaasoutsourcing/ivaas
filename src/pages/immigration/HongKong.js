import React from "react";
import MinorBanner from "../../shared/components/banner/MinorBanner";
import banner from "../../shared/img/ivaas_outsourcing_hong_kong_banner.jpg";
import HeadingHtml from "../../shared/components/htmlText/HeadingHtml";
import ParaHtml from "../../shared/components/htmlText/ParaHtml";
import OrderHtml from "../../shared/components/htmlText/OrderHtml";
import { hongkong_immigration } from "../../data/HongKongService";

const HongKong = () => {
  let {
    headingOne,
    paraOne,
    headingTwo,
    paraTwo,
    listTwo,
    headingThree,
    paraThree,
    listThree,
  } = hongkong_immigration;
  return (
    <>
      {" "}
      <MinorBanner banner={banner} title={"Hong Kong QMAS Visa"} />
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
        </div>
        <div className="html-text-box">
          <HeadingHtml heading={headingThree} />
          <ParaHtml paras={paraThree} />
          <OrderHtml isOrder={true} orderList={listThree} />
        </div>
      </div>
    </>
  );
};

export default HongKong;

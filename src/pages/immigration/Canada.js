import React from "react";
import MinorBanner from "../../shared/components/banner/MinorBanner";
import banner from "../../shared/img/visa-application-composition-with-different-flags.jpg";
import HeadingHtml from "../../shared/components/htmlText/HeadingHtml";
import ParaHtml from "../../shared/components/htmlText/ParaHtml";
import OrderHtml from "../../shared/components/htmlText/OrderHtml";
import { canada_immigration } from "../../data/CanadaService";
const CanadaImmigration = () => {
  // let heading1 =
  //   "Trusted Canada PR Visa Consultants in Delhi for Immigration Guidance";
  // let para1 = [
  //   "Canada, renowned for its quality of life and exceptional benefits, stands as one of the best countries to settle down",
  //   "If you want to work and live in Canada then approach us at Ivaas oursourcing to understand all the formalities involved in the Canada PR Visa process. One has to keep in mind that there are different types of immigration programs under which one can apply for permanent residency in Canada.",
  //   "The permanent resident card or the PR card is given to permanent residents of Canada. They must carry this card when they travel in and out of Canada. The permanent resident will need this card when he or she re-enters Canada.",
  // ];
  // let subheading1 =
  //   "Benefits for Canadian Permanent Residents Guided by Canada PR Visa Consultants in Delhi";
  // let subpara1 = [
  //   "Discover the numerous advantages that Canadian permanent residents can enjoy, especially when guided by expert Canada PR Visa Consultants in Delhi. As you embark on the journey to permanent residency, these benefits become key milestones:",
  // ];
  // let subUnorderList1 = [
  //   "<b>Work, Study, and Travel:</b> Canadian permanent residents have the freedom to work, study, and travel anywhere across the vast landscapes of Canada.",
  //   "<b>Path to Citizenship:</b> Meeting specific criteria opens doors for Canadian permanent residents to apply for citizenship, a significant step towards deeper integration into Canadian society.",
  //   "<b>Medical and Healthcare Benefits:</b> Access to comprehensive medical and healthcare benefits ensures the well-being of permanent residents and their families.",
  //   "<b>Social Benefits:</b> Enjoy an array of social benefits akin to those experienced by Canadian citizens, fostering a sense of community and belonging.",
  //   "<b>Legal Protection:</b> A Canadian permanent resident is safeguarded by the laws of Canada and the Canadian Charter of Rights and Freedom, ensuring equal rights and protection.",
  // ];
  // let subpara2 = [
  //   "While these benefits form the foundation of a fulfilling life in Canada, it's crucial to note that certain restrictions exist. Permanent residents cannot vote, hold political office or secure jobs with high-security clearance requirements. Navigating these nuances is where the expertise of Canada PR Visa Consultants in Delhi becomes invaluable.",
  //   "Our consultants at Ivaas oursourcing are committed to providing detailed insights into these benefits, ensuring you make informed decisions on your journey to Canadian permanent residency. Reach out to us for personalized guidance and support.",
  // ];
  // let subheading2 =
  //   "What are the requirements to start the Canada PR Visa process?";
  // let subpara3 = [
  //   "If you wish to apply for the <span class='hts'>Canada PR Visa Process</span> then one has to keep in mind that there are several different visa categories from which one needs to select the right visa category. The different visa categories include skilled immigrants that are the Express Entry program, Quebec skilled worker program, Investors Entrepreneurs and Self Employed, Family Sponsorship, Live in Care giver Visas. Under the <span class='hts'>Quebec skilled worker program </span> there is the family sponsorship program and sponsoring refugees.",
  //   "One of the most famous visa categories for skilled workers is the <span class='hts'>Canada Express entry program</span>. This is a point based program which is a point-based program. Points are given based on different factors like age, qualification, work experience, etc. The applicant has to give the scores of language tests and they also need to give their ECA report or Educational Credential Assessment report. The applicant has to fulfill the criteria of minimum points and also has to submit the expression of interest.",
  //   "Other documents needed include health and moral certificates. The best candidates are selected based on the Canada Express entry draw and an invitation to apply for the PR visa is sent to the selected candidates. One has to be thorough with the <span class='hts'>Canada Express entry points calculator</span> to know the different factors involved in the point calculation.",
  //   "Other Canada PR visa categories also have their specific documentation and formalities that need to be completed if the applicant wants to start the Canada PR Visa process.",
  // ];
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

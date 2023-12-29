import React from "react";
import Banner from "../shared/components/banner/Banner";
import HeadLessTabs from "../shared/components/headlessTabs/HeadLessTabs";
import ListPoints from "../shared/components/listPoints/ListPoints";
import CustomSection from "../shared/components/customSection/CustomSection";
import Cards from "../shared/components/cards/Cards";
import Testimonial from "../shared/components/testimonial/Testimonial";

const Home = () => {
  const whyChooseUs = [
    {
      title: "Competent and Professional",
      para: "Our team has years of expertise and a track record of success with all visa procedures.",
      icon: "users",
    },
    {
      title: "High Rate of Success",
      para: "Continental Immigration has assisted thousands of candidates in filing their visa applications successfully.",
      icon: "user-chart",
    },
    {
      title: "Dedicated Assistance",
      para: "You will be allocated a Continental Immigration counsellor to assist you during the process.",
      icon: "user-headset",
    },
    {
      title: "More Rapid Documentation",
      para: "Our centralized document repository securely maintains all your documents in one location, expediting the visa application process.",
      icon: "file-signature",
    },
  ];

  return (
    <>
      <Banner />
      <CustomSection heading="Visa Programs">
        <HeadLessTabs />
      </CustomSection>
      <CustomSection heading="Services">
        <Cards />
      </CustomSection>
      <CustomSection heading="Why Choose Us">
        <ListPoints data={whyChooseUs} />
      </CustomSection>
      <CustomSection heading="Testimonial">
        <Testimonial />
      </CustomSection>
    </>
  );
};

export default Home;

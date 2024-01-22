import React from "react";
import Banner from "../shared/components/banner/Banner";
import ListPoints from "../shared/components/listPoints/ListPoints";
import CustomSection from "../shared/components/customSection/CustomSection";
import Cards from "../shared/components/cards/Cards";
import Testimonial from "../shared/components/testimonial/Testimonial";
import { ourServices } from "../data/OurServices";
import { whyChooseUs } from "../data/WhyChooseUs";
import { testimonials } from "../data/Testimonial";
import { visaServices } from ".././data/VisaServices";

const Home = () => {
  return (
    <>
      <Banner />
      <CustomSection heading="Visa Programs">
        <Cards
          data={visaServices}
          boxes={3}
          icon={"fal fa-badge-check"}
          hasDetail={false}
        />
        {/* <HeadLessTabs /> */}
      </CustomSection>
      <CustomSection heading="Services">
        <Cards data={ourServices} hasDetail={true} />
      </CustomSection>
      <CustomSection heading="Why Choose Us">
        <ListPoints data={whyChooseUs} />
      </CustomSection>
      <CustomSection heading="Testimonial">
        <Testimonial data={testimonials} />
      </CustomSection>
    </>
  );
};

export default Home;

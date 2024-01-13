import React from "react";
import FooterLinks from "./FooterLinks";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="kilimanjaro_area view-box">
        <div className="foo_top_header_one section_padding_100_70">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <FooterLinks AboutUs Title={"About Us"} />

                <FooterLinks SocialLinks Title="Social Links" />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <FooterLinks ImpLinks Title="Important Links" />
                <FooterLinks VisaWidget Title="Visa Widget" />
              </div>
              {/* <div className="col-12 col-md-6 col-lg-3">
                <FooterLinks LatestBlogs Title="Latest Blogs" />
              </div> */}
              <div className="col-12 col-md-6 col-lg-4">
                <FooterLinks ContactLinks Title="Quick Contact" />

                <FooterLinks LatestTrips Title="Latest Trips" />
              </div>
            </div>
          </div>
        </div>
        <div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>
                  © 2021 Ivaas OurSourcing. All rights reserved | Design
                  by&nbsp;
                  <a href="https://ivaasoursourcing.com">
                    Ivaas Oursourcing<i className="fa fa-love"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { AtTheTop } from "../../utility/HelperMethod";
import "./Cards.css";

const Cards = () => {
  const cards = [
    {
      src: "https://continentalimmigration.co.in/images/Immigration-services.png",
      alt: "Immigration Services",
      heading: "Immigration Services",
      description:
        "We are renowned for providing our clients with the finest immigration services.",
    },
    {
      src: "https://continentalimmigration.co.in/images/Dependent-Visa.png",
      alt: "Dependent Visa",
      heading: "Dependent Visa",
      description:
        "Our expert consultants will make your dreams into reality by providing Dependent Visa Service.",
    },
    {
      src: "https://continentalimmigration.co.in/images/Study-Abroad.png",
      alt: "Study Abroad",
      heading: "Study Abroad",
      description:
        "We are one of the best Study Abroad visa assistance providers and offer prompt services at affordable charges.",
    },
    {
      src: "https://continentalimmigration.co.in/images/Tourist-visa.png",
      alt: "Tourist Visa",
      heading: "Tourist Visa",
      description:
        "Visiting a foreign country? The Tourist visa process can be tedious, but our assistance will make it simpler for you.",
    },
    {
      src: "https://continentalimmigration.co.in/images/Business-visa.png",
      alt: "Business Visa",
      heading: "Business Visa",
      description:
        "Our team provides complete and practical guidance to our clients during their Business Visa process.",
    },
    {
      src: "https://continentalimmigration.co.in/images/other-services.png",
      alt: "Other Services",
      heading: "Other Services",
      description:
        "Our team helps our clients with also their stamping, translation, and more.",
    },
  ];
  return (
    <>
      <div className="special-festival-banner">
        <div className="containerqqqqqqqqqq heading-style">
          {/* <h2 className="text-center heading-bottom-line">Our Services</h2> */}
          <div className="pt-3">
            <div className="container my-2 mb-5">
              <div className="row">
                {cards.map((card, i) => (
                  <div
                    key={"cards_" + i}
                    className="col-lg-4 col-md-6 col-sm-12 px-3"
                  >
                    <div className="img-detail-card">
                      <Link to={"/trip/" + card.to} onClick={() => AtTheTop()}>
                        {/* {props.load ? (
                          <Loading />
                        ) : ( */}
                        <>
                          <picture>
                            {/* <source
                              srcSet={`${card.imgWeb}`}
                              type="image/webp"
                            /> */}
                            <source srcSet={`${card.src}`} type="image/png" />
                            <img
                              src={`${card.src}`}
                              alt={card.alt}
                              className="img-card-item special-festival"
                              type="image/png"
                            />
                          </picture>
                        </>
                        {/* )} */}
                      </Link>
                    </div>
                    <div className="card-detail-box">
                      <p className="card-date">{/* {card.dates}s */}</p>
                      <p className="card-heading">
                        <i className="fad fa-check" /> &nbsp;
                        {card.heading}
                      </p>
                      <p className="card-rupee">
                        <span>{card.description}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

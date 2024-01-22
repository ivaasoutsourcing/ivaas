import React from "react";
import { Link } from "react-router-dom";
import { AtTheTop, Capitalization } from "../../utility/HelperMethod";
import "./Cards.css";

const Cards = ({
  data,
  boxes = 4,
  icon = "fad fa-check",
  hasDetail = true,
}) => {
  return (
    <>
      <div className="special-festival-banner">
        <div className="container heading-style">
          {/* <h2 className="text-center heading-bottom-line">Our Services</h2> */}
          <div className="pt-3">
            <div className="container my-2 mb-5">
              <div className="row">
                {data.map((card, i) => (
                  <div
                    key={"cards_" + i}
                    className={`col-lg-${boxes} col-md-6 col-sm-12 px-3`}
                  >
                    <Link to="/contact-us" onClick={() => AtTheTop()}>
                      <div
                        className={`${
                          !hasDetail ? "img-detail-card" : "img-card"
                        }`}
                      >
                        <>
                          <picture>
                            <source srcSet={`${card.src}`} type="image/png" />
                            <img
                              src={`${card.src}`}
                              alt={card.alt}
                              className="img-card-item special-festival"
                              type="image/png"
                            />
                          </picture>
                        </>
                        {!hasDetail && (
                          <h4 className="card-label">
                            <span>{Capitalization(card.heading)} </span>
                          </h4>
                        )}
                      </div>

                      {hasDetail && (
                        <div className="card-detail-box">
                          <p className="card-date">{/* {card.dates}s */}</p>
                          <p className="card-heading">
                            <i className={icon} /> &nbsp;
                            {card.heading}
                          </p>
                          <p className="card-rupee">
                            <span>{card.description}</span>
                          </p>
                        </div>
                      )}
                    </Link>
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

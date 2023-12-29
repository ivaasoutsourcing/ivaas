import React from "react";
import { Link } from "react-router-dom";
import notFoundImgUrl from "../../img/ivaas_outsourcing_not_found.png";
import "./NotFound.css";
const NotFound = () => {
  // let notFoundImgUrl = "../../img/ivaas_outsourcing_not_found.png";
  return (
    <>
      <div className="container notFound-space">
        <div className="container return-home-btn">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "var(--theme-color)",
              color: "rgb(255, 255, 255)",
            }}
          >
            <Link
              to="/"
              style={{
                color: "rgb(255, 255, 255)",
              }}
            >
              {" "}
              Click here to return Home
            </Link>
          </button>
        </div>
        <picture>
          {/* <source srcSet={notFoundImgUrlWeb} type="image/webp" /> */}
          <source srcSet={notFoundImgUrl} type="image/png" />
          <img src={notFoundImgUrl} alt="Not Found" />
        </picture>
      </div>
    </>
  );
};

export default NotFound;

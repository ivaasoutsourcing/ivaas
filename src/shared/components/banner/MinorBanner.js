import React from "react";
import "./MinorBanner.css";

const MinorBanner = ({ banner, title }) => {
  var pathname = window.location.pathname;
  let bgcStyle = {
    backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0.1) 30% ), url('${banner}')`,
    zIndex: 1,
    width: "100%",
    height: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <>
      <header
        id="home"
        style={bgcStyle}
        className={`main-content ${pathname !== "/" && "inner"}`}
      >
        <div className="innerBannerImg">
          <h2>{title}</h2>
        </div>
      </header>
    </>
  );
};

export default MinorBanner;

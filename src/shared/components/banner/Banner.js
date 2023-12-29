import React from "react";
import banner from "../../img/close-up-hands-holding-tickets.jpg";

const Banner = () => {
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
      <header id="home" style={bgcStyle} className="main-content">
        <div className="innerBannerImg">{/* <h2>Ivaas Oursourcing</h2> */}</div>
      </header>
    </>
  );
};

export default Banner;

import React from "react";
import Typed from "typed.js";
// import { Carousel } from "react-responsive-carousel";
import banner from "../../img/close-up-hands-holding-tickets.jpg";
// import banner2 from "../../img/full-shot-family-wearing-face-masks.jpg";
// import banner3 from "../../img/visa-application-composition-with-different-flags.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

const Banner = () => {
  let bgcStyle = {
    backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100% ), url('${banner}')`,
    zIndex: 1,
    width: "100%",
    height: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Empowering Journeys, ^1000", "Simplifying Visas.^3000"],
      typeSpeed: 50,
      loopCount: Infinity,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <header id="home" style={bgcStyle} className="main-content">
        <div className="innerBannerImg">
          <h2>
            Ivaas Outsourcing <br />
            <span id="ivaas-banner-title" ref={el} />
          </h2>
        </div>
      </header>
      {/* <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        className="banner-carousel"
      >
        <div className="banner-outer-box">
          <img
            className="banner-box-image"
            src={banner}
            alt="ivaas-outsourcing-banner-1"
          />
        </div>
        <div className="banner-outer-box">
          <img
            className="banner-box-image"
            src={banner2}
            alt="ivaas-outsourcing-banner-2"
          />
        </div>
        <div className="banner-outer-box">
          <img
            className="banner-box-image"
            src={banner3}
            alt="ivaas-outsourcing-banner-2"
          />
        </div>
      </Carousel> */}
    </>
  );
};

export default Banner;

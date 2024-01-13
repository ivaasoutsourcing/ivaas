import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Capitalization } from "../../utility/HelperMethod";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonial.css";
const Testimonial = ({ data }) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
      className="testimonial-main-box"
    >
      {data.map((review, i) => (
        <div key={"testimonial_" + i} className="container">
          <img
            class="testimonial-images"
            src={review.img}
            alt="IvaasOutsourcing_Testrimonials"
          />
          <div className="myCarousel">
            <h3>{Capitalization(review.name)}</h3>
            &#40;&nbsp;
            <span dangerouslySetInnerHTML={{ __html: review.visa }} />
            &nbsp;&#41;
            <p dangerouslySetInnerHTML={{ __html: review.para }} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonial;

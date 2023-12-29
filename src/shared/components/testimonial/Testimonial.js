import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Capitalization } from "../../utility/HelperMethod";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonial.css";
const Testimonial = () => {
  const testimonial = [
    {
      img: "https://picsum.photos/id/1/200",
      name: "Bhavya Walecha",
      visa: "United Kingdom, Visa",
      para: "This is your one-stop destination for all your trip needs. They can handle any group size with utmost perfection. Had the best time.",
    },
    {
      img: "https://picsum.photos/id/2/200",
      name: "Abhishree Pandey",
      visa: "USA, Visa",
      para: "It's completely awesome😊👏<br/> Ivaas Oursourcing is not only innovative but provides you with every good facility with limited requirements... Keep it up.. 💫",
    },
    {
      img: "https://picsum.photos/id/3/200",
      name: "Nityansh Bhardwaj",
      visa: "Canada, Visa",
      para: "I've had many trips before but the amount of fun I had on this one, was truly priceless. Go for this organization without a doubt. They won't disappoint!",
    },
    {
      img: "https://picsum.photos/id/4/200",
      name: "Neha Singh",
      visa: "Canada, Visa",
      para: "The trip was so smooth, I thoroughly enjoyed it. Thank you Ivaas Oursourcing!",
    },
  ];

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {testimonial.map((review, i) => (
        <div key={"testimonial_" + i} className="container">
          <img src={review.img} alt="IvaasOutsourcing_Testrimonials" />
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

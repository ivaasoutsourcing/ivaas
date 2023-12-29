import React from "react";

const CustomSection = (props) => {
  return (
    <>
      <section className="common-section mt-3" id="common-section">
        {/* for festival user -fluid else normal */}
        <div className="container">
          <div className="inner-sec-w3pvt">
            <h3 className="tittle text-center heading-bottom-line ">
              {props.heading}
            </h3>
            {props.children}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomSection;

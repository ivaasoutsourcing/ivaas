import React from "react";
import "./SideNavigation.css";

const SideNavigation = ({ whatsapp }) => {
  return (
    <div className="sticky-side-bar">
      <a
        href={`https://wa.me/${whatsapp}?text=Hey! Ivaas Outsourcing, I have a Query`}
        className="whatsapp"
        target="_blank"
        type="button"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp" /> &nbsp; Enquiry Now
      </a>
    </div>
  );
};

export default SideNavigation;

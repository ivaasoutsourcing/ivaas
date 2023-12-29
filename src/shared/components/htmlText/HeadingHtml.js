import React from "react";
import "./HtmlText.css";
const HeadingHtml = ({ heading }) => {
  return (
    <>
      <h2
        className="html-text-heading"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
    </>
  );
};

export default HeadingHtml;

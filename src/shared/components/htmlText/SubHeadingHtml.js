import React from "react";

const SubHeadingHtml = ({ subHeading }) => {
  return (
    <>
      <h2
        className="html-text-sub-heading"
        dangerouslySetInnerHTML={{ __html: subHeading }}
      ></h2>
    </>
  );
};

export default SubHeadingHtml;

import React from "react";
import "./HtmlText.css";

const ParaHtml = ({ paras }) => {
  return (
    <>
      {paras.map((para, i) => (
        <p
          key={"paraHtml_" + i}
          className="html-text-paragraph"
          dangerouslySetInnerHTML={{ __html: para }}
        />
      ))}
    </>
  );
};

export default ParaHtml;

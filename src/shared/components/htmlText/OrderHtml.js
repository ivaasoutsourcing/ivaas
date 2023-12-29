import React from "react";
import "./HtmlText.css";

const OrderHtml = ({ isOrder, orderList }) => {
  return (
    <>
      <ul className={`html-text-${isOrder ? "order" : "unorder"}-list`}>
        {orderList.map((u, i) => (
          <li
            key={"unorder_list_" + i}
            dangerouslySetInnerHTML={{ __html: u }}
          ></li>
        ))}
      </ul>
    </>
  );
};

export default OrderHtml;

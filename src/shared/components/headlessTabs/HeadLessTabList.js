import React from "react";
import { TabPanel } from "react-headless-tabs";
import { Link } from "react-router-dom";

const HeadLessTabList = ({ tabName, tabList, selectedTab }) => {
  return (
    <>
      <TabPanel hidden={selectedTab !== tabName}>
        <ul className="headlesstabs-ul">
          {tabList.map((t, i) => (
            <li key={"headlesstablist_" + i}>
              <Link to="/contact-us">
                <i className="fal fa-badge-check" /> {t}
              </Link>
            </li>
          ))}
        </ul>
      </TabPanel>
    </>
  );
};

export default HeadLessTabList;

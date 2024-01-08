import React from "react";
import { TabPanel } from "react-headless-tabs";

const HeadLessTabList = ({ tabName, tabList, selectedTab }) => {
  return (
    <>
      <TabPanel hidden={selectedTab !== tabName}>
        <ul className="headlesstabs-ul">
          {tabList.map((t, i) => (
            <li key={"headlesstablist_" + i}>
              <i className="fal fa-badge-check" /> {t}
            </li>
          ))}
        </ul>
      </TabPanel>
    </>
  );
};

export default HeadLessTabList;

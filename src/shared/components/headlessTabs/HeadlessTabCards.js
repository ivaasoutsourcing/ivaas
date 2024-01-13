import React from "react";
import { TabPanel } from "react-headless-tabs";
import Cards from "../cards/Cards";
import { visaServices } from "../../../data/VisaServices";
const HeadlessTabCards = ({ tabName, tabList, selectedTab }) => {
  return (
    <>
      <TabPanel hidden={selectedTab !== tabName}>
        <Cards data={visaServices} boxes={3} icon={"fal fa-badge-check"} />
      </TabPanel>
    </>
  );
};

export default HeadlessTabCards;

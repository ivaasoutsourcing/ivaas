import React from "react";
import { TabPanel } from "react-headless-tabs";
import Cards from "../cards/Cards";
const HeadlessTabCards = ({ tabName, tabList, selectedTab }) => {
  return (
    <>
      <TabPanel hidden={selectedTab !== tabName}>
        <Cards data={[]} boxes={3} icon={"fal fa-badge-check"} />
      </TabPanel>
    </>
  );
};

export default HeadlessTabCards;

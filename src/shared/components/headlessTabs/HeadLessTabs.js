import React from "react";
import { useTabs } from "react-headless-tabs";
import "./HeadlessTabs.css";
import HeadLessTabList from "./HeadLessTabList";
import HeadlessTabCards from "./HeadlessTabCards";

const HeadLessTabs = () => {
  const [selectedTab, setSelectedTab] = useTabs([
    "canada",
    "usa",
    "uk",
    "australia",
    "schengen",
  ]);
  const tabs = [
    {
      title: "Canada",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png",
      tabName: "canada",
    },
    {
      title: "USA",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png",
      tabName: "usa",
    },
    {
      title: "United Kingdom",
      src: "https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png",
      tabName: "uk",
    },
    {
      title: "Australia",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png",
      tabName: "australia",
    },
    {
      title: "Schengen",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png",
      tabName: "schengen",
    },
  ];

  const canadaList = [
    "PR Visa - Express Entry",
    "PR Visa - PNP",
    "Student Visa",
    "Open Work Permit",
    "Spouse Visa",
    "Visitor visa",
  ];

  const usaList = [
    "Work Visa – H1B",
    "Study Visa - F1, J1, M1",
    "Dependent Visa",
    "B1/B2 Visa",
    "L1 Visa",
    "Finance Visa",
  ];
  const ukList = [
    "Skilled Worker Visa",
    "Student Visa – Tier 4",
    "Visitor Visa",
    "Spouse Visa",
    "Business Visa",
    "Finance Visa",
  ];
  const australiaList = [
    "PR Visa – Skill Migration",
    "Student Visa",
    "Dependent Visa",
    "Toursit Visa",
    "Visitor Visa",
    "Business Visa",
  ];
  return (
    <>
      <div className="container">
        <nav className="headlesstabs-nav">
          {tabs.map((tab, i) => (
            <li
              key={`headlesstab_${i}`}
              isactive={`${selectedTab === tab.tabName}`}
              className={`${selectedTab === tab.tabName && "active"}`}
              onClick={() => setSelectedTab(tab.tabName)}
            >
              <img src={tab.src} alt={tab.title} width={30} /> {tab.title}
            </li>
          ))}
        </nav>
        <div className="underline"></div>

        <HeadlessTabCards
          tabName={"canada"}
          tabList={canadaList}
          selectedTab={selectedTab}
        />
        <HeadLessTabList
          tabName={"usa"}
          tabList={usaList}
          selectedTab={selectedTab}
        />
        <HeadLessTabList
          tabName={"uk"}
          tabList={ukList}
          selectedTab={selectedTab}
        />
        <HeadLessTabList
          tabName={"australia"}
          tabList={australiaList}
          selectedTab={selectedTab}
        />
        <HeadLessTabList
          tabName={"schengen"}
          tabList={canadaList}
          selectedTab={selectedTab}
        />
      </div>
    </>
  );
};

export default HeadLessTabs;

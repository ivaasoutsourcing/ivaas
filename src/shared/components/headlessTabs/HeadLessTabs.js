import React from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import "./HeadlessTabs.css";

const HeadLessTabs = () => {
  const [selectedTab, setSelectedTab] = useTabs([
    "canada",
    "usa",
    "uk",
    "australia",
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

        <TabPanel hidden={selectedTab !== "canada"}>
          <ul className="headlesstabs-ul">
            <li>
              <i className="fal fa-badge-check" /> PR Visa - Express Entry
            </li>
            <li>
              <i className="fal fa-badge-check" /> PR Visa - PNP
            </li>
            <li>
              <i className="fal fa-badge-check" /> Student Visa
            </li>
            <li>
              <i className="fal fa-badge-check" /> Open Work Permit
            </li>
            <li>
              <i className="fal fa-badge-check" /> Spouse Visa
            </li>
            <li>
              <i className="fal fa-badge-check" /> Visitor visa
            </li>
          </ul>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "usa"}>
          <ul className="headlesstabs-ul">
            <li>
              <i className="fal fa-badge-check" />
              Work Visa – H1B
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Study Visa - F1, J1, M1
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Dependent Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              B1/B2 Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              L1 Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Finance Visa
            </li>
          </ul>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "uk"}>
          <ul className="headlesstabs-ul">
            <li>
              <i className="fal fa-badge-check" />
              Skilled Worker Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Student Visa – Tier 4
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Visitor Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Spouse Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Business Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Finance Visa
            </li>
          </ul>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "australia"}>
          <ul className="headlesstabs-ul">
            <li>
              <i className="fal fa-badge-check" />
              PR Visa – Skill Migration
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Student Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Dependent Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Toursit Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Visitor Visa
            </li>
            <li>
              <i className="fal fa-badge-check" />
              Business Visa
            </li>
          </ul>
        </TabPanel>
      </div>
    </>
  );
};

export default HeadLessTabs;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AtTheTop,
  RemoveDash,
  WindowPosition,
} from "../../utility/HelperMethod";
import logo from "../../img/ivaas_outsourcing_logo.png";
import "./NavLinks.css";
import {
  business,
  dependent,
  immigration,
  study,
  tourist,
} from "./SubNavLinks";

const NavLinks = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showNavbar, setShowNavbar] = useState(false);

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleActiveClass = (tab) => {
    return activeTab === tab ? "active" : "";
  };
  const styles = { position: "fixed" };
  return (
    <>
      <header
        className="header bg-light"
        style={WindowPosition() > 100 ? styles : null}
      >
        <div className="container p-0">
          <nav className="pt-1">
            <div id="logo">
              <h1>
                <NavLink
                  className="navbar-brand logo-name"
                  to="/"
                  onClick={() => {
                    AtTheTop();
                  }}
                >
                  {" "}
                  <img
                    id="loading"
                    src={logo}
                    alt="Ivaas-Outsourcing-logo"
                    width="150"
                    height="auto"
                  />
                  <span className="logo-name">
                    {/* &nbsp;<span>Ivaas</span>&nbsp; */}
                    {/* <span className="logo-color">
                      &nbsp;<span>Ivaas</span>&nbsp;Outsourcing
                    </span> */}
                  </span>
                </NavLink>
              </h1>
            </div>
            <label htmlFor="drop" className="toggle" onClick={handleShowNavbar}>
              <i className={!showNavbar ? "fas fa-bars" : "fas fa-times"} />
            </label>
            <input type="checkbox" id="drop" />
            <ul className="menu mt-2 border-radius-class">
              <li
                className={handleActiveClass("home")}
                onClick={() => handleActiveTab("home")}
              >
                <NavLink
                  to="/"
                  onClick={() => {
                    AtTheTop();
                  }}
                >
                  &nbsp;Home
                </NavLink>
              </li>
              {/* <li
              className={handleActiveClass("immigration")}
              onClick={() => handleActiveTab("immigration")}
            >
              <NavLink to="/immigration">&nbsp;Immigration</NavLink>
            </li> */}
              <li
                className={`dropdown ${handleActiveClass("immigration")}`}
                onClick={() => handleActiveTab("immigration")}
              >
                <label htmlFor="drop-2" className="toggle">
                  &nbsp;Immigration&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </label>
                <NavLink
                  to="/"
                  onClick={() => {
                    AtTheTop();
                  }}
                >
                  &nbsp;Immigration&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </NavLink>
                <input type="checkbox" id="drop-2" />
                <ul className="sub-dropdown-menu">
                  {immigration.map((x, i) => (
                    <li key={"immigration_" + i}>
                      <NavLink
                        to={`/immigration-visa/${x}`}
                        onClick={() => {
                          AtTheTop();
                        }}
                      >
                        {RemoveDash(x)} pr visa
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={`dropdown ${handleActiveClass("study-visa")}`}
                onClick={() => handleActiveTab("study-visa")}
              >
                <label htmlFor="drop-3" className="toggle">
                  &nbsp;Study Visa&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </label>
                <NavLink
                  to="/"
                  onClick={() => {
                    AtTheTop();
                  }}
                >
                  &nbsp;Study Visa&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </NavLink>
                <input type="checkbox" id="drop-3" />
                <ul className="sub-dropdown-menu">
                  {study.map((x, i) => (
                    <li key={"study_" + i}>
                      <NavLink
                        to={`/study-visa/${x}`}
                        onClick={() => {
                          AtTheTop();
                        }}
                      >
                        {x} Study Visa
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={`dropdown ${handleActiveClass("dependent")}`}
                onClick={() => handleActiveTab("dependent")}
              >
                <label htmlFor="drop-4" className="toggle">
                  &nbsp;Dependent&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </label>
                <NavLink
                  to="/"
                  onClick={() => {
                    AtTheTop();
                  }}
                >
                  &nbsp;Dependent&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </NavLink>
                <input type="checkbox" id="drop-4" />
                <ul className="sub-dropdown-menu">
                  {dependent.map((x, i) => (
                    <li key={"dependent_" + i}>
                      <NavLink
                        to={`/dependent-visa/${x}`}
                        onClick={() => {
                          AtTheTop();
                        }}
                      >
                        {x} Dependent Visa
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={`dropdown ${handleActiveClass("tourist")}`}
                onClick={() => handleActiveTab("tourist")}
              >
                <label htmlFor="drop-5" className="toggle">
                  &nbsp;Tourist&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </label>
                <NavLink
                  to="/"
                  onClick={() => {
                    AtTheTop();
                  }}
                >
                  &nbsp;Tourist&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </NavLink>
                <input type="checkbox" id="drop-5" />
                <ul className="sub-dropdown-menu">
                  {tourist.map((x, i) => (
                    <li key={"tourist_" + i}>
                      <NavLink
                        to={`/tourist-visa/${x}`}
                        onClick={() => {
                          AtTheTop();
                        }}
                      >
                        {x} tourist visa
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={`dropdown ${handleActiveClass("business-visa")}`}
                onClick={() => handleActiveTab("business-visa")}
              >
                <label htmlFor="drop-6" className="toggle">
                  &nbsp;Business Visa&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </label>
                <NavLink
                  to="/"
                  onClick={() => {
                    AtTheTop();
                  }}
                >
                  &nbsp;Business Visa&nbsp;
                  <span className="fad fa-angle-down" aria-hidden="true" />
                </NavLink>
                <input type="checkbox" id="drop-6" />
                <ul className="sub-dropdown-menu">
                  {business.map((x, i) => (
                    <li key={"business_" + i}>
                      <NavLink
                        to={`/business-visa/${x}`}
                        onClick={() => {
                          AtTheTop();
                        }}
                      >
                        {x} business visa
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={handleActiveClass("contact-us")}
                onClick={() => handleActiveTab("contact-us")}
              >
                <NavLink
                  className="highlight-box"
                  to="/contact-us"
                  onClick={() => {
                    AtTheTop();
                  }}
                >
                  &nbsp;Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavLinks;

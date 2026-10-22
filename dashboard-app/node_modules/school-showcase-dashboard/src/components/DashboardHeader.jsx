import React from "react";
import Icon from "./Icon.jsx";
import logo from "../../assets/rareminds.svg";

export default function DashboardHeader({ menuOpen, onMenuClick }) {
  return (
    <>
      <div className="hero-fade" aria-hidden="true" />
      <header className="hdr">
        <div className="hdr-bar" />
        <img className="hdr-logo" src={logo} alt="Rareminds" />
        <div className="hdr-right">
          <button className="bell" aria-label="Notifications"><Icon name="bell" /></button>
          <button className="user" type="button">
            <span className="avatar" aria-hidden="true">AU</span>
            <span className="u-text"><span className="u-name">Admin User</span><span className="u-role">College Admin</span></span>
            <Icon name="arrow" className="u-chev" size={16} />
          </button>
        </div>
        <button className="menu-btn" type="button" onClick={onMenuClick} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="drawer">
          <Icon name="menu" />
        </button>
      </header>
      <section className="title-row">
        <div className="t-left">
          <h1>School Showcase Dashboard</h1>
          <p>A strategic school-level analysis of student growth beyond academic marks</p>
        </div>
        <div className="t-right">
          <div className="box date"><Icon name="calendar" size={18} /><span>01 May 2025 – 30 May 2025</span></div>
          <button className="box export" type="button" onClick={() => window.print()}><Icon name="download" size={17} /><span>Export Report</span></button>
        </div>
      </section>
    </>
  );
}

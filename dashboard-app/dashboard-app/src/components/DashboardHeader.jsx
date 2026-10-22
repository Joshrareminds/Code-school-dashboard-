import React from "react";
import Icon from "./Icon.jsx";
import logo from "../../assets/rareminds.svg";

export default function DashboardHeader({ menuOpen, onMenuToggle, onMenuHover }) {
  return (
    <>
      <header className="hdr">
        <div className="hdr-inner">
          <button
            className="menu-btn"
            type="button"
            onClick={onMenuToggle}
            onMouseEnter={onMenuHover}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="drawer"
          >
            <svg width="27" height="16" viewBox="0 0 27 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M1.5 1.5h24M1.5 8h24M1.5 14.5h24" />
            </svg>
          </button>
          <img className="hdr-logo" src={logo} alt="Rareminds" />
          <div className="hdr-right">
            <button className="bell" type="button" aria-label="Notifications"><Icon name="bell" size={24} /></button>
            <button className="user" type="button">
              <span className="avatar" aria-hidden="true"><Icon name="user" size={16} /></span>
              <span className="u-text">
                <span className="u-name">Admin User</span>
                <span className="u-role">College Admin</span>
              </span>
              <Icon name="chevron" size={16} className="u-chev" />
            </button>
          </div>
        </div>
      </header>
      <section className="title-row">
        <div className="t-left">
          <h1>School Showcase Dashboard</h1>
          <p>A strategic school-level analysis of student growth beyond academic marks</p>
        </div>
        <div className="t-right">
          <div className="box date"><span>01 May 2025 – 30 May 2025</span><Icon name="cal" size={14} /></div>
          <button className="box export" type="button" onClick={() => window.print()}>
            <Icon name="download" size={14} />
            <span>Export Report</span>
          </button>
        </div>
      </section>
    </>
  );
}

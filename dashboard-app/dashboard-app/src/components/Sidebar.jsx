import React from "react";
import Icon from "./Icon.jsx";
import logo from "../../assets/rareminds.svg";

const links = [
  ["snapshot", "Executive Snapshot"],
  ["growth", "Growth Areas"],
  ["voice", "Student Voice"],
  ["participation", "Participation"],
  ["activities", "Activities"],
  ["parents", "Parent Insights"],
  ["next", "Teacher Resources"],
  ["next", "Industry Connect"],
  ["thanks", "Reports"],
  ["top", "Settings"],
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <button className={`scrim${open ? " visible" : ""}`} onClick={onClose} aria-label="Close menu" tabIndex={open ? 0 : -1} />
      <aside className={`drawer${open ? " open" : ""}`} id="drawer">
        <a className="logo-plate" href="#top" onClick={onClose}><img src={logo} alt="Rareminds" /></a>
        <nav className="nav" aria-label="Dashboard sections">
          {links.map(([id, label], index) => (
            <a href={`#${id}`} className={index === 0 ? "active" : ""} key={`${id}-${label}`} onClick={onClose}>
              <span className="nav-icon"><Icon name={["school", "growth", "voice", "activity", "calendar", "parent", "book", "connect", "report", "settings"][index]} size={17} /></span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="drawer-spacer" />
        <blockquote className="quote-card"><Icon name="sparkle" size={20} /><p>We don’t measure children against each other. We help every child grow in their own way.</p></blockquote>
        <div className="help-card">
          <strong>Need Help?</strong>
          <a href="mailto:hello@rareminds.org">hello@rareminds.org</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
        </div>
      </aside>
    </>
  );
}

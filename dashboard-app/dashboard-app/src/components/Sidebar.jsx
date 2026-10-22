import React, { useState } from "react";
import Icon from "./Icon.jsx";
import logo from "../../assets/rareminds.svg";

// [section id, label, icon]
const links = [
  ["snapshot", "Executive Snapshot", "home"],
  ["growth", "Growth Areas", "bars"],
  ["voice", "Student Voice", "msg"],
  ["participation", "Participation", "clip"],
  ["activities", "Activities", "users"],
  ["parents", "Parent Insights", "heart"],
  ["next", "Teacher Resources", "book"],
  ["next", "Industry Connect", "brief"],
  ["thanks", "Reports", "file"],
  ["top", "Settings", "sliders"],
];

export default function Sidebar({ open, pinned, onClose, onPin, onLeave }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <button className={`scrim${open ? " visible" : ""}`} onClick={onClose} onMouseEnter={onLeave} aria-label="Close menu" tabIndex={open ? 0 : -1} />
      <aside className={`drawer${open ? " open" : ""}`} id="drawer" aria-hidden={!open} onMouseLeave={onLeave}>
        <a
          className="logo-plate"
          href="#top"
          tabIndex={open ? 0 : -1}
          onClick={(event) => {
            // The drawer slides in under the menu button, so a click that follows a hover lands here:
            // keep the menu open (pin it) instead of closing it.
            if (!pinned) {
              event.preventDefault();
              onPin();
            } else {
              onClose();
            }
          }}
        >
          <img src={logo} alt="Rareminds" />
        </a>
        <nav className="nav" aria-label="Dashboard sections">
          {links.map(([id, label, icon], index) => (
            <a
              href={`#${id}`}
              className={index === active ? "active" : ""}
              key={label}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setActive(index);
                onClose();
              }}
            >
              <Icon name={icon} size={18} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="drawer-spacer" />
        <blockquote className="quote-card">
          <p>We don’t measure children against each other. We help every child grow in their own way.</p>
          <Icon name="heart" size={16} className="gold" />
        </blockquote>
        <div className="help-card">
          <div className="help-title">
            <Icon name="help" size={18} className="gold" />
            <strong>Need Help?</strong>
          </div>
          <i className="hr" aria-hidden="true" />
          <a href="mailto:hello@rareminds.org" tabIndex={open ? 0 : -1}>
            <Icon name="mail" size={16} />
            <span>hello@rareminds.org</span>
          </a>
          <i className="hr" aria-hidden="true" />
          <a href="tel:+919876543210" tabIndex={open ? 0 : -1}>
            <Icon name="phone" size={16} />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </aside>
    </>
  );
}

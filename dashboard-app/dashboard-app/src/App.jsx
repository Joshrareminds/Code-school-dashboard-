import React, { useEffect, useState } from "react";
import DashboardHeader from "./components/DashboardHeader.jsx";
import Sidebar from "./components/Sidebar.jsx";
import {
  ActivitySummary,
  CommunicationThemes,
  GrowthCoverage,
  KpiGrid,
  NextSteps,
  ParentVisibility,
  Participation,
  SchoolSummary,
  StudentVoice,
  ThankYouBanner,
} from "./components/DashboardContent.jsx";

export default function App() {
  // The menu opens on hover or click (per the Figma "Menu button" layer).
  // A click pins it open; a hover-opened menu closes again when the pointer leaves it.
  const [menu, setMenu] = useState({ open: false, pinned: false });
  const closeMenu = () => setMenu({ open: false, pinned: false });

  useEffect(() => {
    if (!menu.open) return undefined;
    const onKey = (event) => event.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu.open]);

  return (
    <div className="app-shell" id="top">
      <div className="canvas">
        <div className="bg-collage" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}collage.svg)` }} aria-hidden="true" />
        <div className="bg-glow glow-1" aria-hidden="true" />
        <div className="bg-glow glow-2" aria-hidden="true" />
        <div className="hero-fade" aria-hidden="true" />

        <DashboardHeader
          menuOpen={menu.open}
          onMenuToggle={() => setMenu({ open: true, pinned: true })}
          onMenuHover={() => setMenu((current) => (current.open ? current : { open: true, pinned: false }))}
        />
        <main className="content">
          <SchoolSummary />
          <KpiGrid />
          <section className="row row3">
            <GrowthCoverage />
            <Participation />
            <StudentVoice />
          </section>
          <section className="row row4">
            <CommunicationThemes />
            <ActivitySummary />
            <ParentVisibility />
            <NextSteps />
          </section>
          <ThankYouBanner />
        </main>
        <Sidebar
          open={menu.open}
          pinned={menu.pinned}
          onClose={closeMenu}
          onPin={() => setMenu({ open: true, pinned: true })}
          onLeave={() => setMenu((current) => (current.pinned ? current : { open: false, pinned: false }))}
        />
      </div>
    </div>
  );
}

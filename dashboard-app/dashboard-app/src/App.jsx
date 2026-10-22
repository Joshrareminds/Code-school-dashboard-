import React, { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell" id="top">
      <div className="canvas">
        <DashboardHeader menuOpen={menuOpen} onMenuClick={() => setMenuOpen(true)} />
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
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </div>
  );
}

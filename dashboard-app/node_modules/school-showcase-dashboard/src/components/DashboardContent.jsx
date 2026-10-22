import React from "react";
import Icon from "./Icon.jsx";
import logo from "../../assets/rareminds.svg";

const summary = [
  ["School Name", "Sunrise International School", "school"],
  ["City", "Bengaluru, Karnataka", "location"],
  ["Grade / Group", "Grade 8", "book"],
  ["Students in Pilot", "120", "students"],
  ["Pilot Duration", "30 Days", "clock"],
  ["Prepared By", "Rareminds Team", "person"],
];

const kpis = [
  ["Students engaged", "120", "Across the pilot cohort", "students"],
  ["Activities completed", "24", "Across 6 activity types", "activity"],
  ["Voice moments captured", "105", "Student reflections shared", "voice"],
  ["Growth areas explored", "5", "Holistic skills in focus", "growth"],
];

const growth = [
  ["Communication", 86, "teal"],
  ["Collaboration", 78, "purple"],
  ["Confidence", 72, "orange"],
  ["Critical Thinking", 68, "blue"],
  ["Self Reflection", 64, "rose"],
];

const participation = [
  ["Speaking", 82],
  ["Group Work", 68],
  ["Reflection", 91],
  ["Projects", 74],
  ["Peer Feedback", 59],
];

const voice = [
  ["Reflection Responses", 105, "teal"],
  ["Speaking Activity", 95, "purple"],
  ["Group Discussion", 110, "orange"],
  ["Career Curiosity", 80, "blue"],
  ["Peer Appreciation", 75, "rose"],
];

const activities = [
  ["Group Discussions", 28, "teal"],
  ["Speaking Activities", 24, "purple"],
  ["Reflection Journals", 18, "orange"],
  ["Career Curiosity", 16, "blue"],
  ["Peer Appreciation", 14, "rose"],
];

const communicationThemes = [
  "Guided expression helps students feel safe.",
  "Short speaking tasks encourage participation.",
  "Group context builds confidence.",
  "Reflection improves clarity of thoughts.",
  "Repeated opportunities create growth.",
];

const nextSteps = [
  "Continue short speaking activities weekly.",
  "Add reflection before presentations.",
  "Use roles in group tasks for participation.",
  "Share Parent Insight Summaries regularly.",
  "Consider expanding to Grade 7 next term.",
  "Teacher briefing on communication growth.",
  "Parent orientation on Beyond Marks Impact.",
];

function CardHeading({ title, subtitle }) {
  return (
    <div className="head">
      <div className="head-top"><h2>{title}</h2><Icon name="more" size={17} /></div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export function SchoolSummary() {
  return (
    <section className="card summary" id="snapshot" aria-label="School summary">
      {summary.map(([label, value, icon], index) => (
        <React.Fragment key={label}>
          {index > 0 && <i className="vd" aria-hidden="true" />}
          <div className="sum-item">
            <span className="sum-icon"><Icon name={icon} size={18} /></span>
            <div><small>{label}</small><strong>{value}</strong></div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}

export function KpiGrid() {
  return (
    <section className="kpis" id="kpis" aria-label="Key metrics">
      {kpis.map(([label, value, note, icon], index) => (
        <article className={`card kpi kpi-${index}`} key={label}>
          <span className="kpi-icon"><Icon name={icon} size={20} /></span>
          <div className="kpi-copy"><span>{label}</span><strong>{value}</strong><small>{note}</small></div>
        </article>
      ))}
    </section>
  );
}

export function GrowthCoverage() {
  return (
    <article className="card panel growth-panel" id="growth">
      <CardHeading title="Growth Area Coverage" subtitle="Key areas of student growth focused in this pilot" />
      <ul className="rows">
        {growth.map(([label, value, tone]) => (
          <li className="growth-row" key={label}>
            <span className={`chip ${tone}`}><Icon name="growth" size={17} /></span>
            <div className="growth-copy"><span>{label}</span><div className="progress"><i className={tone} style={{ width: `${value}%` }} /></div></div>
            <strong>{value}%</strong>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Participation() {
  return (
    <article className="card panel participation-panel" id="participation">
      <CardHeading title="Participation Overview" subtitle="Engagement across key activities" />
      <div className="bars" role="img" aria-label="Participation by activity">
        {[0, 25, 50, 75, 100].map((position) => <i className="gl" style={{ left: `${position}%` }} key={position} />)}
        {participation.map(([label, value], index) => (
          <div className="bar-column" key={label}>
            <span className="bar-value">{value}%</span>
            <div className="bar-track"><i className={`bar-fill tone-${index}`} style={{ height: `${value}%` }} /></div>
            <span className="bar-label">{label}</span>
          </div>
        ))}
      </div>
      <div className="grow" />
      <div className="note"><Icon name="sparkle" size={17} /><p>Participation data is used to understand engagement patterns and plan better opportunities for every child.</p></div>
    </article>
  );
}

export function StudentVoice() {
  return (
    <article className="card panel voice-panel" id="voice">
      <CardHeading title="Student Voice Moments" subtitle="A glimpse of what students shared" />
      <div className="donut-row">
        <div className="donut"><div className="donut-center"><strong>105</strong><span>Voices</span><span>Captured</span></div></div>
        <ul className="legend">
          {voice.map(([label, count, tone]) => (
            <li key={label}><i className={`legend-dot ${tone}`} /><span>{label}</span><strong>{count}</strong></li>
          ))}
        </ul>
      </div>
      <div className="grow" />
      <blockquote className="quotes">
        <p>“I want to become more confident when I speak.”</p>
        <p>“I enjoy helping my team and solving problems together.”</p>
        <p>“I want to explore football and sports management.”</p>
        <cite>– Student Voice Snippets (Anonymized)</cite>
      </blockquote>
    </article>
  );
}

export function CommunicationThemes() {
  return (
    <article className="card panel themes-panel">
      <CardHeading title="Communication Growth Themes" />
      <ul className="rows big">
        {communicationThemes.map((theme) => (
          <li key={theme}><span className="chip c30"><Icon name="sparkle" size={16} /></span><p>{theme}</p></li>
        ))}
      </ul>
    </article>
  );
}

export function ActivitySummary() {
  return (
    <article className="card panel activity-panel" id="activities">
      <CardHeading title="Activities at a Glance" subtitle="Activities conducted in the pilot" />
      <div className="stack" aria-label="Activity distribution">
        {activities.map(([label, value, tone]) => <span className={tone} style={{ width: `${value}%` }} title={`${label}: ${value}%`} key={label} />)}
      </div>
      <ul className="rows acts">
        {activities.map(([label, value, tone]) => (
          <li key={label}><i className={`activity-dot ${tone}`} /><span>{label}</span><strong>{value}%</strong></li>
        ))}
      </ul>
      <div className="grow" />
      <div className="total"><span>Total Activities</span><strong>6</strong></div>
    </article>
  );
}

export function ParentVisibility() {
  const usual = ["Marks", "Attendance", "Event Photos", "Certificates", "PTM Comments", "Exam Performance"];
  const pilot = ["Communication Growth", "Participation Journey", "Student Voice Moments", "Effort & Reflection", "Confidence in Expression", "Collaboration & Teamwork", "Clarity & Future Readiness"];
  return (
    <article className="card panel parents-panel" id="parents">
      <CardHeading title="Parent Visibility" />
      <div className="compare">
        <div className="col see"><h3>Parents Usually See</h3><ul>{usual.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="col show"><h3>This Pilot Helps Show</h3><ul>{pilot.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div>
      <div className="grow" />
      <div className="note"><Icon name="sparkle" size={17} /><p>Parent Insight Summaries help parents see holistic growth beyond academic marks.</p></div>
    </article>
  );
}

export function NextSteps() {
  return (
    <article className="card panel steps-panel" id="next">
      <CardHeading title="Next Step Recommendation" subtitle="Suggested actions for the school" />
      <ul className="rows steps">
        {nextSteps.map((step, index) => (
          <li key={step}><span className={`chip c28 step-${index}`}><Icon name="arrow" size={15} /></span><p>{step}</p></li>
        ))}
      </ul>
    </article>
  );
}

export function ThankYouBanner() {
  return (
    <section className="card banner" id="thanks">
      <span className="chip c44"><Icon name="sparkle" size={22} /></span>
      <h2>Every Child Has More to Show</h2>
      <i className="vd s28" aria-hidden="true" />
      <p>Thank you for partnering with Rareminds to create a future-ready learning environment.</p>
      <div className="banner-brand"><img src={logo} alt="Rareminds" /><small>GROWTH | CONFIDENCE | FUTURE READY</small></div>
    </section>
  );
}

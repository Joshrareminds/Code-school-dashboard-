import React from "react";
import Icon from "./Icon.jsx";
import logo from "../../assets/rareminds.svg";

/* ---------- data (copy and numbers taken from the Figma design) ---------- */

const summary = [
  ["school", "School Name", "Sunrise International School"],
  ["pin", "City", "Bengaluru, Karnataka"],
  ["grad", "Grade / Group", "Grade 8"],
  ["users", "Students in Pilot", "120"],
  ["cal", "Pilot Duration", "30 Days"],
  ["user", "Prepared By", "Rareminds Team"],
];

// [icon, value, label, progress %, caption]
const kpis = [
  ["users", "120", "Students Participated", 100, "100% of target"],
  ["clip", "6", "Activities Completed", 100, "Planned: 6"],
  ["msg", "105", "Student Reflections Captured", 87, "87% participation"],
  ["users", "120", "Parent Insight Summaries Prepared", 100, "100% completed"],
  ["sprout", "5", "Growth Areas Covered", (5 / 7) * 100, "Out of 7 core areas"],
];

// [icon, label, covered?]
const growth = [
  ["msg", "Communication", true],
  ["users", "Participation", true],
  ["mega", "Confidence in Expression", true],
  ["users", "Collaboration", true],
  ["target", "Clarity", true],
  ["crown", "Leadership", false],
  ["bulb", "Creativity", false],
  ["rocket", "Future Readiness", true],
];

// [label, count, share of the enrolled cohort]
const participation = [
  ["Enrolled in Pilot", 120, 100],
  ["Attended at least one activity", 115, 96],
  ["Completed reflection activity", 105, 87],
  ["Participated in group task", 110, 92],
  ["Attempted speaking / sharing activity", 95, 79],
  ["Included in Parent Insight Summary", 120, 100],
];

const axis = [
  ["0%", 0],
  ["25%", 25],
  ["50%", 50],
  ["75%", 75],
  ["100%", 100],
];

const voice = [
  ["Reflection Responses", 105, "#1f8a5b"],
  ["Speaking Activity", 95, "#c9608f"],
  ["Group Discussion", 110, "#e3a21a"],
  ["Career Curiosity", 80, "#c4523a"],
  ["Peer Appreciation", 75, "#8dbb2d"],
];

const communicationThemes = [
  ["msg", "Guided expression helps students feel safe."],
  ["mic", "Short speaking tasks encourage participation."],
  ["users", "Group context builds confidence."],
  ["pen", "Reflection improves clarity of thoughts."],
  ["refresh", "Repeated opportunities create growth."],
];

const activities = [
  ["Reflection Activities", 2, "#1f8a5b"],
  ["Communication Activities", 2, "#c9608f"],
  ["Group / Collaboration Activities", 1, "#e3a21a"],
  ["Career Curiosity Activities", 1, "#c4523a"],
  ["Creative Expression Activities", 0, "#8dbb2d"],
];

const parentsUsuallySee = ["Marks", "Attendance", "Event Photos", "Certificates", "PTM Comments", "Exam Performance"];
const pilotHelpsShow = [
  "Communication Growth",
  "Participation Journey",
  "Student Voice Moments",
  "Effort & Reflection",
  "Confidence in Expression",
  "Collaboration & Teamwork",
  "Clarity & Future Readiness",
];

const nextSteps = [
  ["mic", "Continue short speaking activities weekly."],
  ["clip", "Add reflection before presentations."],
  ["user", "Use roles in group tasks for participation."],
  ["mail", "Share Parent Insight Summaries regularly."],
  ["trend", "Consider expanding to Grade 7 next term."],
  ["grad", "Teacher briefing on communication growth."],
  ["users", "Parent orientation on Beyond Marks Impact."],
];

/* ---------- small pieces ---------- */

function Chip({ icon, size = 28, iconSize = 15 }) {
  return (
    <span className="chip" style={{ width: size, height: size, borderRadius: size / 2 }}>
      <Icon name={icon} size={iconSize} />
    </span>
  );
}

function CardHead({ title, subtitle }) {
  return (
    <div className="head">
      <div className="head-top">
        <h2>{title}</h2>
        <Icon name="info" size={14} className="info" />
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function Divider() {
  return <i className="hr" aria-hidden="true" />;
}

/* ---------- sections ---------- */

export function SchoolSummary() {
  return (
    <section className="card summary" id="snapshot" aria-label="School summary">
      {summary.map(([icon, label, value], index) => (
        <React.Fragment key={label}>
          {index > 0 && <i className="vd" aria-hidden="true" />}
          <div className="sum-item">
            <Icon name={icon} size={24} className="sum-icon" />
            <div>
              <small>{label}</small>
              <strong>{value}</strong>
            </div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}

export function KpiGrid() {
  return (
    <section className="kpis" id="kpis" aria-label="Key metrics">
      {kpis.map(([icon, value, label, pct, caption], index) => (
        <article className="card kpi" key={`${label}-${index}`}>
          <div className="kpi-top">
            <Chip icon={icon} size={44} iconSize={22} />
            <div className="kpi-copy">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
          <div className="kpi-foot">
            <div className="progress"><i style={{ width: `${pct}%` }} /></div>
            <p>{caption}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export function GrowthCoverage() {
  return (
    <article className="card panel" id="growth">
      <CardHead title="Growth Area Coverage" subtitle="Key areas of student growth focused in this pilot" />
      <ul className="list">
        {growth.map(([icon, label, covered], index) => (
          <React.Fragment key={label}>
            {index > 0 && <Divider />}
            <li className="g-row">
              <Chip icon={icon} />
              <span className="g-label">{label}</span>
              {covered ? (
                <span className="status">
                  <span className="tick"><Icon name="check" size={11} strokeWidth={3} /></span>
                  <b>Covered</b>
                </span>
              ) : (
                <span className="status observed">
                  <i className="amber" />
                  <span>Observed (Next Phase)</span>
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

export function Participation() {
  return (
    <article className="card panel" id="participation">
      <CardHead title="Participation Overview" subtitle="Engagement across key activities" />
      <div className="hbars" role="img" aria-label="Participation across key activities">
        {axis.map(([, pct]) => (
          <i
            className="gridline"
            key={pct}
            style={pct === 100 ? { right: 0 } : { left: `${pct}%` }}
            aria-hidden="true"
          />
        ))}
        {participation.map(([label, count, pct]) => (
          <div className="hbar" key={label}>
            <div className="hbar-top">
              <span>{label}</span>
              <b>{count} ({pct}%)</b>
            </div>
            <div className="hbar-track"><i style={{ width: `${pct}%` }} /></div>
          </div>
        ))}
        <div className="x-axis" aria-hidden="true">
          {axis.map(([text, pct]) => (
            <span key={text} className={pct === 0 ? "first" : pct === 100 ? "last" : ""} style={pct > 0 && pct < 100 ? { left: `${pct}%` } : undefined}>{text}</span>
          ))}
        </div>
      </div>
      <div className="spacer" />
      <div className="note">
        <Icon name="users" size={22} />
        <p>Participation data is used to understand engagement patterns and plan better opportunities for every child.</p>
      </div>
    </article>
  );
}

function Donut() {
  const total = voice.reduce((sum, [, count]) => sum + count, 0);
  const radius = 82;
  const circumference = 2 * Math.PI * radius;
  const gap = 3;
  let offset = 0;
  return (
    <div className="donut">
      <svg viewBox="0 0 200 200" width="200" height="200" role="img" aria-label="Student voice moments by type">
        <g transform="rotate(-90 100 100)" fill="none" strokeWidth="36">
          {voice.map(([label, count, color]) => {
            const length = (count / total) * circumference;
            const dash = `${Math.max(length - gap, 0)} ${circumference}`;
            const node = (
              <circle key={label} cx="100" cy="100" r={radius} stroke={color} strokeDasharray={dash} strokeDashoffset={-offset - gap / 2} />
            );
            offset += length;
            return node;
          })}
        </g>
      </svg>
      <div className="donut-center">
        <strong>105</strong>
        <span>Voices</span>
        <span>Captured</span>
      </div>
    </div>
  );
}

export function StudentVoice() {
  return (
    <article className="card panel" id="voice">
      <CardHead title="Student Voice Moments" subtitle="A glimpse of what students shared" />
      <div className="donut-row">
        <Donut />
        <ul className="legend">
          {voice.map(([label, count, color]) => (
            <li key={label}>
              <i style={{ background: color }} />
              <span>{label}</span>
              <b>{count}</b>
            </li>
          ))}
        </ul>
      </div>
      <div className="spacer" />
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
    <article className="card panel">
      <CardHead title="Communication Growth Themes" />
      <ul className="list">
        {communicationThemes.map(([icon, text], index) => (
          <React.Fragment key={text}>
            {index > 0 && <Divider />}
            <li className="t-row">
              <Chip icon={icon} size={30} />
              <p>{text}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

export function ActivitySummary() {
  const total = activities.reduce((sum, [, count]) => sum + count, 0);
  return (
    <article className="card panel" id="activities">
      <CardHead title="Activities at a Glance" subtitle="Activities conducted in the pilot" />
      <div className="stack" role="img" aria-label="Activity distribution">
        {activities.filter(([, count]) => count > 0).map(([label, count, color]) => (
          <span key={label} style={{ flexGrow: count, background: color }} title={`${label}: ${count}`} />
        ))}
      </div>
      <ul className="list">
        {activities.map(([label, count, color], index) => (
          <React.Fragment key={label}>
            {index > 0 && <Divider />}
            <li className="a-row">
              <i style={{ background: color }} />
              <span>{label}</span>
              <b>{count}</b>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <div className="spacer" />
      <div className="total">
        <span>Total Activities</span>
        <b>{total}</b>
      </div>
    </article>
  );
}

export function ParentVisibility() {
  return (
    <article className="card panel" id="parents">
      <CardHead title="Parent Visibility" />
      <div className="compare">
        <div className="col see">
          <h3>Parents Usually See</h3>
          <ul>{parentsUsuallySee.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="col show">
          <h3>This Pilot Helps Show</h3>
          <ul>{pilotHelpsShow.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <div className="spacer" />
      <div className="note">
        <Icon name="users" size={22} />
        <p>Parent Insight Summaries help parents see holistic growth beyond academic marks.</p>
      </div>
    </article>
  );
}

export function NextSteps() {
  return (
    <article className="card panel" id="next">
      <CardHead title="Next Step Recommendation" subtitle="Suggested actions for the school" />
      <ul className="list">
        {nextSteps.map(([icon, text], index) => (
          <React.Fragment key={text}>
            {index > 0 && <Divider />}
            <li className="s-row">
              <Chip icon={icon} size={28} iconSize={14} />
              <p>{text}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

export function ThankYouBanner() {
  return (
    <section className="card banner" id="thanks">
      <Chip icon="trophy" size={44} iconSize={22} />
      <h2>Every Child Has More to Show</h2>
      <i className="vd tall" aria-hidden="true" />
      <p>Thank you for partnering with Rareminds to create a future-ready learning environment.</p>
      <div className="banner-brand">
        <img src={logo} alt="Rareminds" />
        <small>GROWTH | CONFIDENCE | FUTURE READY</small>
      </div>
    </section>
  );
}

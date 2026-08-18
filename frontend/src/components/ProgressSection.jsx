import { useEffect, useRef, useState } from 'react';
import './ProgressSection.css';

const skills = [
  { name: 'Vocabulary', pct: 80, colorClass: 'skill-green' },
  { name: 'Grammar', pct: 62, colorClass: 'skill-yellow' },
  { name: 'Listening', pct: 70, colorClass: 'skill-blue' },
];

function RingProgress({ value, max, color }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / max) * circumference;

  return (
    <svg className="progress-ring-svg" viewBox="0 0 72 72" aria-hidden="true">
      <circle cx="36" cy="36" r={radius} fill="none" stroke="var(--color-surface-container-high)" strokeWidth="8" />
      <circle
        cx="36" cy="36" r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
        style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
      />
      <text x="36" y="40" textAnchor="middle" fontSize="13" fontWeight="900" fill="var(--color-on-surface)">
        {Math.round((value / max) * 100)}%
      </text>
    </svg>
  );
}

export default function ProgressSection() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="progress-section reveal" id="progress-section" ref={sectionRef} aria-labelledby="progress-heading">
      <div className="progress-inner">
        <div className="progress-grid">
          {/* Copy */}
          <div className="progress-copy">
            <span className="progress-eyebrow">📊 Dashboard</span>
            <h2 className="progress-heading" id="progress-heading">See yourself getting better.</h2>
            <p className="progress-subtext">
              Your personalized dashboard tracks every milestone.
              Watch your skills grow in real time with beautiful, motivating visualizations.
            </p>
          </div>

          {/* Dashboard Card */}
          <div className="glass-panel progress-dashboard">
            <div className="progress-dashboard-title">My Progress</div>

            {/* Stat Cards */}
            <div className="progress-stats-row">
              <div className="progress-stat">
                <span className="progress-stat-icon">🏆</span>
                <div className="progress-stat-value" style={{ color: 'var(--color-secondary-container)' }}>240</div>
                <div className="progress-stat-label">Weekly XP</div>
              </div>
              <div className="progress-stat">
                <span className="progress-stat-icon">📖</span>
                <div className="progress-stat-value">4/5</div>
                <div className="progress-stat-label">Lessons</div>
              </div>
              <div className="progress-stat">
                <span className="progress-stat-icon">🔥</span>
                <div className="progress-stat-value" style={{ color: 'var(--color-secondary-container)' }}>12</div>
                <div className="progress-stat-label">Streak</div>
              </div>
            </div>

            {/* XP Goal Ring */}
            <div className="progress-xp-ring">
              <RingProgress value={240} max={300} color="var(--color-primary-container)" />
              <div className="progress-ring-info">
                <div className="progress-ring-label">Weekly Goal</div>
                <div className="progress-ring-value">240</div>
                <div className="progress-ring-max">/ 300 XP</div>
              </div>
            </div>

            {/* Skills */}
            <div className="progress-skills" aria-label="Skill levels">
              {skills.map((skill) => (
                <div key={skill.name} className="progress-skill-row">
                  <div className="progress-skill-label-row">
                    <span className="progress-skill-name">{skill.name}</span>
                    <span className="progress-skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="progress-skill-track" role="progressbar" aria-label={skill.name} aria-valuenow={skill.pct} aria-valuemin={0} aria-valuemax={100}>
                    <div
                      className={`progress-skill-fill ${skill.colorClass}`}
                      style={{ width: animated ? `${skill.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

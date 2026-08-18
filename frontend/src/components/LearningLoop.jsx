import React from 'react';
import './LearningLoop.css';


function LearnMiniUI() {
  return (
    <div className="loop-stage-mini-ui">
      <div className="loop-mini-word-row">
        <span className="loop-mini-word selected">Yo</span>
        <span className="loop-mini-word selected">bebo</span>
        <span className="loop-mini-word">café</span>
      </div>
      <div className="loop-mini-bar">
        <div className="loop-mini-bar-fill loop-mini-bar-fill-green" />
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-on-surface-variant)' }}>
        Lesson 3 of 5
      </div>
    </div>
  );
}

function PracticeMiniUI() {
  return (
    <div className="loop-stage-mini-ui">
      <div className="loop-mini-flashcard">
        <div className="loop-mini-flash-question">What does "gato" mean?</div>
        <div className="loop-mini-flash-answer">Cat 🐱</div>
      </div>
      <div className="loop-mini-bar">
        <div className="loop-mini-bar-fill loop-mini-bar-fill-yellow" />
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-on-surface-variant)' }}>
        8 / 10 correct
      </div>
    </div>
  );
}

function ProgressMiniUI() {
  return (
    <div className="loop-stage-mini-ui">
      <div className="loop-mini-stat-row">
        <div className="loop-mini-stat">
          <div className="loop-mini-stat-val" style={{ color: 'var(--color-primary)' }}>🔥12</div>
          <div className="loop-mini-stat-lbl">Streak</div>
        </div>
        <div className="loop-mini-stat">
          <div className="loop-mini-stat-val" style={{ color: 'var(--color-tertiary)' }}>240</div>
          <div className="loop-mini-stat-lbl">XP</div>
        </div>
      </div>
      <div className="loop-mini-bar">
        <div className="loop-mini-bar-fill loop-mini-bar-fill-blue" />
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-on-surface-variant)' }}>
        Weekly goal: 240 / 300 XP
      </div>
    </div>
  );
}

const stages = [
  {
    id: 'learn',
    badge: 'LEARN',
    badgeClass: 'loop-stage-badge-learn',
    icon: '📚',
    title: 'Learn',
    desc: 'Bite-sized lessons teach vocabulary, grammar, and pronunciation through interactive exercises.',
    MiniUI: LearnMiniUI,
  },
  {
    id: 'practice',
    badge: 'PRACTICE',
    badgeClass: 'loop-stage-badge-practice',
    icon: '⚡',
    title: 'Practice',
    desc: 'Reinforce what you\'ve learned with smart review sessions that adapt to your weak spots.',
    MiniUI: PracticeMiniUI,
  },
  {
    id: 'progress',
    badge: 'PROGRESS',
    badgeClass: 'loop-stage-badge-progress',
    icon: '📈',
    title: 'Progress',
    desc: 'Track your growth with XP, streaks, and skill levels that celebrate every milestone.',
    MiniUI: ProgressMiniUI,
  },
];

export default function LearningLoop() {
  return (
    <section className="learning-loop reveal" id="learning-loop" aria-labelledby="loop-heading">
      <div className="learning-loop-inner">
        <div className="learning-loop-header">
          <h2 className="learning-loop-heading" id="loop-heading">How learning works.</h2>
          <p className="learning-loop-subtext">A simple, proven loop that keeps you coming back.</p>
        </div>

        <div className="learning-loop-stages">
          {stages.map((stage, i) => (
            <React.Fragment key={stage.id}>
              <article className="glass-panel loop-stage">
                <span className={`loop-stage-badge ${stage.badgeClass}`}>
                  {stage.icon} {stage.badge}
                </span>
                <stage.MiniUI />
                <h3 className="loop-stage-title">{stage.title}</h3>
                <p className="loop-stage-desc">{stage.desc}</p>
              </article>
              {i < stages.length - 1 && (
                <div className="learning-loop-connector">
                  <div className="learning-loop-connector-arrow">→</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

import './StreakSection.css';

const days = [
  { label: 'MON', done: true },
  { label: 'TUE', done: true },
  { label: 'WED', done: true },
  { label: 'THU', done: true },
  { label: 'FRI', done: true },
  { label: 'SAT', done: true },
  { label: 'SUN', done: false, today: true },
];

export default function StreakSection() {
  return (
    <section className="streak-section reveal" id="streak-section" aria-labelledby="streak-heading">
      <div className="streak-inner">
        <div className="streak-grid">
          {/* Copy */}
          <div className="streak-copy">
            <span className="streak-eyebrow">🔥 Habit Tracker</span>
            <h2 className="streak-heading" id="streak-heading">Keep your streak alive.</h2>
            <p className="streak-subtext">
              Daily practice is the secret to fluency. Build a habit with streaks,
              reminders, and weekly goals that keep you motivated.
            </p>
          </div>

          {/* Streak Card */}
          <div className="glass-panel streak-card streak-glow">
            {/* Main Streak Display */}
            <div className="streak-main-display">
              <span className="streak-fire-icon" aria-hidden="true">🔥</span>
              <div className="streak-count" aria-label="12 day streak">12</div>
              <div className="streak-label">Day Streak</div>
            </div>

            {/* Weekly Calendar */}
            <div className="streak-calendar" role="list" aria-label="Weekly progress">
              {days.map((day) => (
                <div key={day.label} className="streak-day" role="listitem">
                  <span className="streak-day-label">{day.label}</span>
                  <div
                    className={`streak-day-circle ${day.done ? 'done' : day.today ? 'today' : 'inactive'}`}
                    aria-label={day.done ? `${day.label} completed` : day.today ? `${day.label} today` : `${day.label} not yet`}
                  >
                    {day.done ? '✓' : day.today ? '🔥' : '—'}
                  </div>
                </div>
              ))}
            </div>

            {/* Today's Goal */}
            <div className="streak-goal-row">
              <div className="streak-goal-card">
                <div className="streak-goal-label">Today's Goal</div>
                <div className="streak-goal-value" style={{ color: 'var(--color-secondary-container)' }}>10 XP Left</div>
              </div>
              <div className="streak-goal-card">
                <div className="streak-goal-label">Weekly XP</div>
                <div className="streak-goal-value">240 / 300</div>
              </div>
            </div>

            <button className="btn-primary streak-keep-btn" onClick={() => {}} id="streak-keep-learning-btn">
              Keep Learning 🔥
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import './MotivationSection.css';

const achievements = [
  {
    id: 'first-lesson',
    icon: '✅',
    iconClass: 'achievement-icon-green',
    title: 'First Lesson',
    xp: '+10 XP',
    xpClass: 'achievement-xp-green',
    desc: 'You completed your very first lesson!',
    glow: 'rgba(88,204,2,0.08)',
  },
  {
    id: 'streak-12',
    icon: '🔥',
    iconClass: 'achievement-icon-yellow',
    title: '12 Day Streak',
    xp: '+50 XP',
    xpClass: 'achievement-xp-yellow',
    desc: 'Amazing consistency! You\'re on fire.',
    glow: 'rgba(254,199,0,0.10)',
  },
  {
    id: 'new-skill',
    icon: '🌟',
    iconClass: 'achievement-icon-blue',
    title: 'New Skill',
    xp: '+25 XP',
    xpClass: 'achievement-xp-blue',
    desc: 'You unlocked a brand new skill level.',
    glow: 'rgba(74,189,255,0.08)',
  },
  {
    id: 'perfect-lesson',
    icon: '💎',
    iconClass: 'achievement-icon-purple',
    title: 'Perfect Lesson',
    xp: '+15 XP',
    xpClass: 'achievement-xp-purple',
    desc: 'Zero mistakes. Flawless execution.',
    glow: 'rgba(160,100,255,0.08)',
  },
  {
    id: 'weekly-goal',
    icon: '🏆',
    iconClass: 'achievement-icon-orange',
    title: 'Weekly Goal',
    xp: '+30 XP',
    xpClass: 'achievement-xp-orange',
    desc: 'Crushed your 300 XP weekly target.',
    glow: 'rgba(255,140,0,0.08)',
  },
];

function AchievementCard({ achievement }) {
  return (
    <article
      className="glass-panel achievement-card"
      style={{ '--card-glow': achievement.glow }}
      aria-label={`Achievement: ${achievement.title}`}
    >
      <div className={`achievement-icon ${achievement.iconClass}`}>{achievement.icon}</div>
      <div className="achievement-title">{achievement.title}</div>
      <div className={`achievement-xp ${achievement.xpClass}`}>{achievement.xp}</div>
      <p className="achievement-desc">{achievement.desc}</p>
    </article>
  );
}

export default function MotivationSection() {
  const topRow = achievements.slice(0, 3);
  const bottomRow = achievements.slice(3);

  return (
    <section className="motivation-section reveal" id="motivation-section" aria-labelledby="motivation-heading">
      <div className="motivation-inner">
        <h2 className="motivation-heading" id="motivation-heading">Every small win counts.</h2>
        <p className="motivation-subtext">Celebrate progress. Stay motivated. Never stop learning.</p>

        <div className="achievements-grid">
          {topRow.map((a) => <AchievementCard key={a.id} achievement={a} />)}
        </div>
        <div className="achievements-row2">
          {bottomRow.map((a) => <AchievementCard key={a.id} achievement={a} />)}
        </div>
      </div>
    </section>
  );
}

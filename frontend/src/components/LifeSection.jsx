import './LifeSection.css';

const cards = [
  {
    id: 'five-minutes',
    icon: 'timer',
    iconClass: 'life-card-icon-green',
    title: '5 MINUTES',
    desc: 'Bite-sized lessons mean you can learn anytime, anywhere.',
  },
  {
    id: 'one-goal',
    icon: 'target',
    iconClass: 'life-card-icon-yellow',
    title: 'ONE GOAL',
    desc: 'Focus on reaching your daily objective one lesson at a time.',
  },
  {
    id: 'every-day',
    icon: 'calendar_month',
    iconClass: 'life-card-icon-blue',
    title: 'EVERY DAY',
    desc: 'Consistency is key. Keep your streak alive to unlock rewards.',
  },
];

export default function LifeSection() {
  return (
    <section className="life-section reveal" id="life-section" aria-labelledby="life-heading">
      <div className="life-inner">
        <div className="life-header">
          <h2 className="life-heading" id="life-heading">Learning that fits into your life.</h2>
          <p className="life-subtext">Simple, flexible, and effective – on your schedule.</p>
        </div>
        <div className="life-cards">
          {cards.map((card) => (
            <article key={card.id} className="glass-panel life-card">
              <div className="life-card-icon-wrap">
                <span className={`material-symbols-outlined life-card-icon ${card.iconClass}`}>
                  {card.icon}
                </span>
              </div>
              <h3 className="life-card-title">{card.title}</h3>
              <p className="life-card-desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const AnimatedNumber = ({ end, prefix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    // Slight delay before animating so it feels deliberate
    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isVisible]);

  return <span ref={nodeRef}>{prefix}{count}</span>;
};

const DuoOwl = () => (
  <svg className="owl-svg" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Duolingo Owl mascot">
    {/* Wings */}
    <ellipse cx="22" cy="100" rx="22" ry="28" fill="#46a302" transform="rotate(-15 22 100)"/>
    <ellipse cx="118" cy="100" rx="22" ry="28" fill="#46a302" transform="rotate(15 118 100)"/>
    {/* Body */}
    <ellipse cx="70" cy="110" rx="45" ry="45" fill="#58cc02"/>
    {/* Head */}
    <circle cx="70" cy="72" r="52" fill="#58cc02"/>
    {/* Ear tufts */}
    <ellipse cx="42" cy="26" rx="12" ry="18" fill="#46a302" transform="rotate(-20 42 26)"/>
    <ellipse cx="98" cy="26" rx="12" ry="18" fill="#46a302" transform="rotate(20 98 26)"/>
    {/* Face white area */}
    <ellipse cx="70" cy="78" rx="40" ry="36" fill="white" opacity="0.95"/>
    {/* Belly */}
    <ellipse cx="70" cy="120" rx="30" ry="28" fill="white" opacity="0.9"/>
    {/* Left Eye Socket */}
    <circle cx="52" cy="72" r="20" fill="white"/>
    <circle cx="52" cy="72" r="14" fill="#1b1c1c"/>
    <circle cx="52" cy="72" r="8" fill="#2d3330"/>
    <circle cx="56" cy="68" r="4" fill="white"/>
    <circle cx="50" cy="74" r="2" fill="white" opacity="0.6"/>
    {/* Right Eye Socket */}
    <circle cx="88" cy="72" r="20" fill="white"/>
    <circle cx="88" cy="72" r="14" fill="#1b1c1c"/>
    <circle cx="88" cy="72" r="8" fill="#2d3330"/>
    <circle cx="92" cy="68" r="4" fill="white"/>
    <circle cx="86" cy="74" r="2" fill="white" opacity="0.6"/>
    {/* Beak */}
    <path d="M62 88 Q70 98 78 88 Q74 84 70 82 Q66 84 62 88Z" fill="#fec700"/>
    <ellipse cx="70" cy="88" rx="8" ry="4" fill="#f4a800"/>
    {/* Eyebrows (happy) */}
    <path d="M36 56 Q52 48 68 56" stroke="#1b1c1c" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M72 56 Q88 48 104 56" stroke="#1b1c1c" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    {/* Feet */}
    <ellipse cx="56" cy="152" rx="12" ry="6" fill="#fec700"/>
    <ellipse cx="84" cy="152" rx="12" ry="6" fill="#fec700"/>
    <line x1="44" y1="152" x2="50" y2="158" stroke="#fec700" strokeWidth="3" strokeLinecap="round"/>
    <line x1="56" y1="152" x2="56" y2="159" stroke="#fec700" strokeWidth="3" strokeLinecap="round"/>
    <line x1="68" y1="152" x2="62" y2="158" stroke="#fec700" strokeWidth="3" strokeLinecap="round"/>
    <line x1="72" y1="152" x2="78" y2="158" stroke="#fec700" strokeWidth="3" strokeLinecap="round"/>
    <line x1="84" y1="152" x2="84" y2="159" stroke="#fec700" strokeWidth="3" strokeLinecap="round"/>
    <line x1="96" y1="152" x2="90" y2="158" stroke="#fec700" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export default function Hero({ onOpenModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero reveal active" id="hero" aria-labelledby="hero-heading">
      <div className="hero-grid">
        {/* Left: Copy */}
        <div className="hero-copy">
          <h1 className="hero-heading" id="hero-heading">
            Learn a language.
            <span className="hero-heading-accent">Have fun.</span>
          </h1>
          <p className="hero-subtext">
            Learn with bite-sized lessons, playful challenges, and a little motivation every day.
          </p>
          <div className="hero-cta-group">
            <div className="hero-cta-row">
              <button
                className="btn-primary hero-cta-primary"
                onClick={onOpenModal}
                id="hero-get-started"
              >
                Get Started
              </button>
              <button
                className="btn-secondary hero-cta-secondary"
                onClick={onOpenModal}
                id="hero-have-account"
              >
                I Already Have an Account
              </button>
            </div>
          </div>
        </div>

        {/* Right: Composition */}
        <div className="hero-visual" aria-hidden="true">
          {/* Background Blob */}
          <div className="hero-blob" />

          {/* Main Glass Panel with Owl */}
          <div className="glass-panel hero-owl-panel floating">
            <div className="hero-owl-svg-wrap">
              <DuoOwl />
            </div>
            <div className="hero-owl-label">
              <div className="hero-owl-lang-chip">
                <span>🇪🇸</span>
                <span>Spanish</span>
              </div>
            </div>
            <div className="hero-progress-bar-wrap">
              <div className="hero-progress-bar-track">
                <div className="hero-progress-bar-fill" />
              </div>
            </div>
          </div>

          {/* Floating Language Card */}
          <div className="glass-panel hero-lang-card floating-delay" style={{ animationDelay: '1s' }}>
            <span>🏆</span>
            <div>
              <div className="hero-card-lang-text">Top 10%</div>
              <div className="hero-card-lang-sub">This week</div>
            </div>
          </div>

          {/* Floating Streak Card */}
          <div className="glass-panel hero-streak-card floating-delay streak-glow">
            <span className="material-symbols-outlined hero-card-icon hero-streak-icon">local_fire_department</span>
            <div>
              <div className="hero-card-value hero-streak-value"><AnimatedNumber end={12} duration={2000} /></div>
              <div className="hero-card-label">Day Streak</div>
            </div>
          </div>

          {/* Floating XP Card */}
          <div className="glass-panel hero-xp-card floating">
            <span className="material-symbols-outlined hero-card-icon hero-xp-icon">bolt</span>
            <div>
              <div className="hero-card-value hero-xp-value"><AnimatedNumber end={50} prefix="+" duration={2000} /></div>
              <div className="hero-card-label">XP Earned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

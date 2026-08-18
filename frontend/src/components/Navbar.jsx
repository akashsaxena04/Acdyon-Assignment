import { useState, useEffect } from 'react';
import './Navbar.css';

const DuoOwlLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#58cc02"/>
    {/* Body */}
    <ellipse cx="16" cy="19" rx="8" ry="8" fill="#58cc02"/>
    {/* Head/Face */}
    <circle cx="16" cy="14" r="8" fill="#58cc02"/>
    {/* Belly */}
    <ellipse cx="16" cy="20" rx="5" ry="5" fill="#fff" opacity="0.9"/>
    {/* Left Eye */}
    <circle cx="12.5" cy="13" r="3.5" fill="white"/>
    <circle cx="12.5" cy="13" r="2" fill="#1b1c1c"/>
    <circle cx="13.2" cy="12.2" r="0.7" fill="white"/>
    {/* Right Eye */}
    <circle cx="19.5" cy="13" r="3.5" fill="white"/>
    <circle cx="19.5" cy="13" r="2" fill="#1b1c1c"/>
    <circle cx="20.2" cy="12.2" r="0.7" fill="white"/>
    {/* Beak */}
    <path d="M14.5 16 L16 18 L17.5 16 Z" fill="#fec700"/>
    {/* Eyebrows */}
    <path d="M10 10.5 Q12.5 9 15 10.5" stroke="#1b1c1c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M17 10.5 Q19.5 9 22 10.5" stroke="#1b1c1c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

export default function Navbar({ onOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} role="button" tabIndex={0} aria-label="Duolingo – Back to top">
          <div className="navbar-logo-icon">
            <DuoOwlLogo />
          </div>
          <span className="navbar-logo-text">duolingo</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="navbar-links" role="list">
          <li><a onClick={() => scrollTo('life-section')} role="button" tabIndex={0}>Learn</a></li>
          <li><a onClick={() => scrollTo('learning-loop')} role="button" tabIndex={0}>How It Works</a></li>
          <li><a onClick={() => scrollTo('language-explorer')} role="button" tabIndex={0}>Languages</a></li>
        </ul>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <button className="navbar-login-btn" onClick={onOpenModal}>Log In</button>
          <button className="btn-primary navbar-cta-btn" onClick={onOpenModal}>Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`} role="menu">
        <a className="navbar-mobile-link" onClick={() => scrollTo('life-section')} role="menuitem" tabIndex={0}>Learn</a>
        <a className="navbar-mobile-link" onClick={() => scrollTo('learning-loop')} role="menuitem" tabIndex={0}>How It Works</a>
        <a className="navbar-mobile-link" onClick={() => scrollTo('language-explorer')} role="menuitem" tabIndex={0}>Languages</a>
        <div className="navbar-mobile-divider" />
        <button className="btn-primary navbar-mobile-cta" onClick={() => { setMenuOpen(false); onOpenModal(); }}>Get Started</button>
      </div>
    </nav>
  );
}

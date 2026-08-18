import './Footer.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const FooterOwl = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#58cc02"/>
    <ellipse cx="16" cy="19" rx="8" ry="8" fill="#58cc02"/>
    <circle cx="16" cy="14" r="8" fill="#58cc02"/>
    <ellipse cx="16" cy="20" rx="5" ry="5" fill="#fff" opacity="0.9"/>
    <circle cx="12.5" cy="13" r="3.5" fill="white"/>
    <circle cx="12.5" cy="13" r="2" fill="#1b1c1c"/>
    <circle cx="13.2" cy="12.2" r="0.7" fill="white"/>
    <circle cx="19.5" cy="13" r="3.5" fill="white"/>
    <circle cx="19.5" cy="13" r="2" fill="#1b1c1c"/>
    <circle cx="20.2" cy="12.2" r="0.7" fill="white"/>
    <path d="M14.5 16 L16 18 L17.5 16 Z" fill="#fec700"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <FooterOwl />
              <span className="footer-logo-text">duolingo</span>
            </div>
            <p className="footer-tagline">Learn a language. Have fun. For free.</p>
          </div>

          {/* Links */}
          <div className="footer-links-group">
            <div className="footer-col">
              <div className="footer-col-title">Learn</div>
              <a className="footer-link" onClick={() => scrollTo('life-section')} role="button" tabIndex={0}>How It Works</a>
              <a className="footer-link" onClick={() => scrollTo('learning-loop')} role="button" tabIndex={0}>The Loop</a>
              <a className="footer-link" onClick={() => scrollTo('lesson-showcase')} role="button" tabIndex={0}>Try a Lesson</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Languages</div>
              <a className="footer-link" onClick={() => scrollTo('language-explorer')} role="button" tabIndex={0}>Spanish</a>
              <a className="footer-link" onClick={() => scrollTo('language-explorer')} role="button" tabIndex={0}>French</a>
              <a className="footer-link" onClick={() => scrollTo('language-explorer')} role="button" tabIndex={0}>Japanese</a>
              <a className="footer-link" onClick={() => scrollTo('language-explorer')} role="button" tabIndex={0}>All Languages</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a className="footer-link" href="#" tabIndex={0}>About</a>
              <a className="footer-link" href="#" tabIndex={0}>Blog</a>
              <a className="footer-link" href="#" tabIndex={0}>Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Duolingo, Inc. All rights reserved.</p>
          <div className="footer-legal-links">
            <a className="footer-legal-link" href="#">Privacy Policy</a>
            <a className="footer-legal-link" href="#">Terms of Service</a>
            <a className="footer-legal-link" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import './FinalCTA.css';

export default function FinalCTA({ onOpenModal }) {
  return (
    <section className="final-cta reveal" id="final-cta" aria-labelledby="cta-heading">
      <div className="final-cta-inner">
        <div className="glass-panel final-cta-card">
          <div className="final-cta-owl" aria-hidden="true">🦉</div>
          <h2 className="final-cta-heading" id="cta-heading">
            Ready to learn <span>something new?</span>
          </h2>
          <p className="final-cta-subtext">
            Join hundreds of millions of learners worldwide. 
            It's free, fun, and it actually works.
          </p>
          <button
            id="final-cta-btn"
            className="btn-primary final-cta-btn"
            onClick={onOpenModal}
          >
            Get Started Now
          </button>
          <p className="final-cta-note">Free forever. No credit card required. 🎉</p>
        </div>
      </div>
    </section>
  );
}

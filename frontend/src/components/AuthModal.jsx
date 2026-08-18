import { useState } from 'react';
import './AuthModal.css';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(false);

  // Close when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? 'Logged in successfully! (Demo)' : 'Account created! (Demo)');
    onClose();
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{isLogin ? 'Welcome back' : 'Create your profile'}</h2>
          <p className="modal-subtitle">
            {isLogin ? 'Log in to continue learning.' : 'Start your journey today.'}
          </p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="text" className="modal-input" placeholder="Age" required />
          )}
          {!isLogin && (
            <input type="text" className="modal-input" placeholder="Name (optional)" />
          )}
          <input type="email" className="modal-input" placeholder="Email" required />
          <input type="password" className="modal-input" placeholder="Password" required />
          
          <button type="submit" className="btn-primary modal-submit-btn">
            {isLogin ? 'LOG IN' : 'CREATE ACCOUNT'}
          </button>
        </form>

        <div className="modal-footer">
          {isLogin ? (
            <>
              Don't have an account? 
              <button onClick={() => setIsLogin(false)}>Sign up</button>
            </>
          ) : (
            <>
              Already have an account? 
              <button onClick={() => setIsLogin(true)}>Log in</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LifeSection from './components/LifeSection';
import LessonShowcase from './components/LessonShowcase';
import LearningLoop from './components/LearningLoop';
import StreakSection from './components/StreakSection';
import LanguageExplorer from './components/LanguageExplorer';
import ProgressSection from './components/ProgressSection';
import MotivationSection from './components/MotivationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { playDing } from './utils/sound';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll reveal using IntersectionObserver
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Konami Code Easter Egg
  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          alert('You found the secret Konami code! 🎉🚀');
          // Add a fun css class to body for 5 seconds
          document.body.classList.add('easter-egg-active');
          setTimeout(() => {
            document.body.classList.remove('easter-egg-active');
          }, 5000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar onOpenModal={() => { playDing(); setIsModalOpen(true); }} />
      <main>
        <Hero onOpenModal={() => { playDing(); setIsModalOpen(true); }} />
        <div className="section-divider" />
        <LifeSection />
        <div className="section-divider" />
        <LessonShowcase />
        <div className="section-divider" />
        <LearningLoop />
        <div className="section-divider" />
        <StreakSection />
        <div className="section-divider" />
        <LanguageExplorer />
        <div className="section-divider" />
        <ProgressSection />
        <div className="section-divider" />
        <MotivationSection />
        <FinalCTA onOpenModal={() => { playDing(); setIsModalOpen(true); }} />
      </main>
      <Footer />
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './LessonShowcase.css';

// ─────────────────────────────────────────────────────────────
// LESSON DATA  (5 questions, Q4 is the original unchanged card)
// ─────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    // Q1
    prompt: 'Translate this sentence',
    sentence: '"Good morning."',
    choices: [
      { id: 'a', text: 'Buenas noches.' },
      { id: 'b', text: 'Buenos días.' },
      { id: 'c', text: 'Gracias.' },
      { id: 'd', text: 'Hola.' },
    ],
    correctId: 'b',
    correctText: 'Buenos días.',
  },
  {
    // Q2
    prompt: 'Translate this sentence',
    sentence: '"Thank you."',
    choices: [
      { id: 'a', text: 'Por favor.' },
      { id: 'b', text: 'Gracias.' },
      { id: 'c', text: 'Adiós.' },
      { id: 'd', text: 'Buenos días.' },
    ],
    correctId: 'b',
    correctText: 'Gracias.',
  },
  {
    // Q3
    prompt: 'Translate this sentence',
    sentence: '"How are you?"',
    choices: [
      { id: 'a', text: '¿Dónde estás?' },
      { id: 'b', text: '¿Cómo estás?' },
      { id: 'c', text: '¿Qué haces?' },
      { id: 'd', text: 'Buenas noches.' },
    ],
    correctId: 'b',
    correctText: '¿Cómo estás?',
  },
  {
    // Q4 — THE ORIGINAL CARD. Text, options, and order are unchanged.
    prompt: 'Translate this sentence',
    sentence: '"I drink coffee."',
    choices: [
      { id: 'a', text: 'I eat bread.' },
      { id: 'b', text: 'Yo bebo café.' },
      { id: 'c', text: 'She drinks tea.' },
      { id: 'd', text: 'Good morning.' },
    ],
    correctId: 'b',
    correctText: 'Yo bebo café.',
  },
  {
    // Q5
    prompt: 'Translate this sentence',
    sentence: '"I love learning languages."',
    choices: [
      { id: 'a', text: 'Me gusta el café.' },
      { id: 'b', text: 'Me encanta aprender idiomas.' },
      { id: 'c', text: 'Quiero viajar.' },
      { id: 'd', text: 'Buenos días.' },
    ],
    correctId: 'b',
    correctText: 'Me encanta aprender idiomas.',
  },
];

const TOTAL = QUESTIONS.length; // 5
const XP_PER_CORRECT = 10;

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────
export default function LessonShowcase() {
  // Core lesson state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  // Derived values for the active question
  const q = QUESTIONS[currentQuestion];
  const questionNumber = currentQuestion + 1; // 1-based display
  const progressPct = (questionNumber / TOTAL) * 100;

  const isCorrect = answerSubmitted && selected === q.correctId;
  const isIncorrect = answerSubmitted && selected !== q.correctId;

  // ── Handlers ──────────────────────────────────────────────

  const handleSelect = (id) => {
    if (!answerSubmitted) setSelected(id);
  };

  const handleCheck = () => {
    if (!selected) return;
    const correct = selected === q.correctId;
    setAnswerSubmitted(true);
    if (correct) setScore((s) => s + XP_PER_CORRECT);
  };

  const handleContinue = () => {
    const isLast = currentQuestion === TOTAL - 1;
    if (isLast) {
      setLessonCompleted(true);
    } else {
      setCurrentQuestion((n) => n + 1);
      setSelected(null);
      setAnswerSubmitted(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelected(null);
    setAnswerSubmitted(false);
    setScore(0);
    setLessonCompleted(false);
  };

  // ── Render ────────────────────────────────────────────────
  return (
    <section
      className="lesson-showcase reveal"
      id="lesson-showcase"
      aria-labelledby="lesson-heading"
    >
      <div className="lesson-showcase-inner">
        <div className="lesson-showcase-grid">

          {/* ── Left copy ──────────────────────────────────── */}
          <div className="lesson-showcase-copy">
            <h2 className="lesson-showcase-heading" id="lesson-heading">
              Five minutes.<br />
              One lesson.<br />
              <em>Real progress.</em>
            </h2>
            <p className="lesson-showcase-subtext">
              Each lesson is designed to be quick, focused, and deeply satisfying.
              Learn in a way that actually sticks.
            </p>
          </div>

          {/* ── Lesson card ────────────────────────────────── */}
          <div
            className="glass-panel lesson-card"
            role="region"
            aria-label="Interactive lesson demo"
          >
            {!lessonCompleted ? (
              <>
                {/* Top row — language badge + hearts */}
                <div className="lesson-top-row">
                  <div className="lesson-language-badge">
                    <span>🇪🇸</span>
                    <span>Spanish</span>
                  </div>
                  <div className="lesson-hearts" aria-label="3 lives remaining">
                    <span title="Life">❤️</span>
                    <span title="Life">❤️</span>
                    <span title="Life">❤️</span>
                  </div>
                </div>

                {/* Progress — derived from currentQuestion */}
                <div className="lesson-progress-wrap">
                  <div className="lesson-progress-label">
                    <span>{questionNumber} / {TOTAL}</span>
                    <span className="lesson-xp-badge">+10 XP</span>
                  </div>
                  <div
                    className="lesson-progress-track"
                    role="progressbar"
                    aria-valuenow={questionNumber}
                    aria-valuemin={0}
                    aria-valuemax={TOTAL}
                    aria-label={`Question ${questionNumber} of ${TOTAL}`}
                  >
                    <div
                      className="lesson-progress-fill"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>

                {/* Prompt + sentence */}
                <p className="lesson-prompt">{q.prompt}</p>
                <div className="lesson-sentence">{q.sentence}</div>

                {/* Answer choices */}
                <div
                  className="lesson-choices"
                  role="radiogroup"
                  aria-label="Answer choices"
                >
                  {q.choices.map((choice) => {
                    const isSelected = selected === choice.id;
                    const isThisCorrect = answerSubmitted && choice.id === q.correctId;
                    const isThisWrong =
                      answerSubmitted && isSelected && choice.id !== q.correctId;

                    return (
                      <button
                        key={choice.id}
                        id={`choice-${choice.id}`}
                        className={[
                          'lesson-choice-btn',
                          isSelected && !answerSubmitted ? 'selected' : '',
                          isThisCorrect ? 'correct' : '',
                          isThisWrong ? 'incorrect' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onClick={() => handleSelect(choice.id)}
                        disabled={answerSubmitted}
                        role="radio"
                        aria-checked={isSelected}
                        aria-pressed={isSelected}
                      >
                        {choice.text}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback banner */}
                {answerSubmitted && (
                  <div
                    className={`lesson-feedback ${
                      isCorrect ? 'correct-feedback' : 'incorrect-feedback'
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    <span className="lesson-feedback-icon">
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <div>
                      <strong>{isCorrect ? 'Correct!' : 'Not quite!'}</strong>
                      {isIncorrect && (
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            marginTop: 2,
                          }}
                        >
                          The answer is: <em>{q.correctText}</em>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* CHECK / CONTINUE button */}
                {!answerSubmitted ? (
                  <button
                    id="lesson-check-btn"
                    className="btn-primary lesson-check-btn"
                    onClick={handleCheck}
                    disabled={!selected}
                  >
                    Check
                  </button>
                ) : (
                  <button
                    id="lesson-continue-btn"
                    className="btn-primary lesson-check-btn"
                    onClick={handleContinue}
                  >
                    {currentQuestion < TOTAL - 1 ? 'Continue' : 'Finish Lesson'}
                  </button>
                )}
              </>
            ) : (
              /* ── Completion state — reuses existing design ── */
              <div
                className="lesson-complete"
                role="status"
                aria-live="polite"
              >
                <div className="lesson-complete-emoji">🎉</div>
                <div className="lesson-complete-title">Lesson Complete!</div>
                <div className="lesson-complete-xp">+{score} XP Earned</div>
                <div
                  style={{
                    fontSize: '14px',
                    color: 'var(--color-on-surface-variant)',
                    fontWeight: 600,
                  }}
                >
                  {TOTAL} / {TOTAL} complete
                </div>
                <button
                  id="lesson-complete-restart"
                  className="btn-primary lesson-try-again-btn"
                  onClick={handleReset}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
          {/* ── end lesson card ── */}

        </div>
      </div>
    </section>
  );
}

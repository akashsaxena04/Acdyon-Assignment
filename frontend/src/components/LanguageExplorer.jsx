import './LanguageExplorer.css';

const languages = [
  { id: 'spanish', flag: '🇪🇸', name: 'Spanish', greeting: 'Hola', learners: '500M+ learners' },
  { id: 'french', flag: '🇫🇷', name: 'French', greeting: 'Bonjour', learners: '300M+ learners' },
  { id: 'japanese', flag: '🇯🇵', name: 'Japanese', greeting: 'こんにちは', learners: '150M+ learners' },
  { id: 'german', flag: '🇩🇪', name: 'German', greeting: 'Hallo', learners: '200M+ learners' },
  { id: 'italian', flag: '🇮🇹', name: 'Italian', greeting: 'Ciao', learners: '100M+ learners' },
  { id: 'korean', flag: '🇰🇷', name: 'Korean', greeting: '안녕하세요', learners: '80M+ learners' },
];

export default function LanguageExplorer() {
  return (
    <section className="language-explorer reveal" id="language-explorer" aria-labelledby="lang-heading">
      <div className="language-explorer-inner">
        <div className="language-explorer-header">
          <h2 className="language-explorer-heading" id="lang-heading">
            Choose your language.
          </h2>
          <p className="language-explorer-subtext">
            Learn any of 40+ languages at your own pace.
          </p>
        </div>

        <div className="language-grid">
          {languages.map((lang) => (
            <div
              key={lang.id}
              id={`lang-card-${lang.id}`}
              className="glass-panel language-card"
              role="button"
              tabIndex={0}
              aria-label={`Learn ${lang.name} – ${lang.greeting}`}
              onClick={() => {}}
              onKeyDown={(e) => e.key === 'Enter' && {}}
            >
              <span className="language-card-flag" aria-hidden="true">{lang.flag}</span>
              <div className="language-card-info">
                <div className="language-card-name">{lang.name}</div>
                <div className="language-card-greeting">{lang.greeting}</div>
                <div className="language-card-learners">{lang.learners}</div>
              </div>
              <span className="material-symbols-outlined language-card-arrow" aria-hidden="true">
                arrow_forward
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

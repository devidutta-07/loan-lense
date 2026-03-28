import { useDarkMode } from '../context/DarkModeContext';

export default function Hero() {
  const { dark } = useDarkMode();

  return (
    <section className="pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 ${dark ? 'bg-primary-900/30 text-primary-400 border border-primary-800' : 'bg-primary-50 text-primary-600 border border-primary-100'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Live & Open Source
        </div>

        <h1 className={`font-display text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
          LoanLens
        </h1>

        <p className={`text-lg mb-3 ${dark ? 'text-primary-400' : 'text-primary-600'} font-medium`}>
          AI-Powered Loan Prediction System
        </p>

        <p className={`text-base max-w-xl mx-auto mb-8 leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          Predict loan approval using machine learning. Enter applicant details below and get instant, data-driven decisions — powered by XGBoost with 94% accuracy.
        </p>

        <div className="flex justify-center gap-3">
          <a
            href="#predict"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
          >
            Make a Prediction
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="https://github.com/devidutta-07/loan-lense.git"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-colors ${dark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className={`flex justify-center gap-10 mt-12 pt-8 border-t ${dark ? 'border-slate-800' : 'border-slate-100'}`}>
          {[
            { value: '94%', label: 'ROC-AUC' },
            { value: '6+', label: 'Models Tested' },
            { value: 'Real-time', label: 'Predictions' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
              <div className={`text-xs mt-0.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useDarkMode } from '../context/DarkModeContext';

const stack = ['Python', 'Scikit-learn', 'XGBoost', 'FastAPI', 'Streamlit', 'Pandas', 'NumPy'];

export default function TechStack() {
  const { dark } = useDarkMode();

  return (
    <section id="tech" className={`py-20 px-6 ${dark ? 'bg-slate-900/50' : 'bg-slate-50/80'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className={`font-display text-2xl sm:text-3xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Tech Stack
          </h2>
          <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Built with industry-standard tools
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-100">
          {stack.map((name) => (
            <span
              key={name}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${dark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-primary-600' : 'bg-white border-slate-200 text-slate-700 hover:border-primary-400'}`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

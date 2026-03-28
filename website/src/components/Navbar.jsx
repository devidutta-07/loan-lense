import { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const navLinks = [
  { label: 'Predictor', href: '#predict' },
  { label: 'Stack', href: '#tech' },
];

export default function Navbar() {
  const { dark, toggle } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bg = scrolled
    ? dark
      ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800'
      : 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
            <span className="text-white text-xs font-bold">L</span>
          </div>
          <span className={`font-display font-bold text-base tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            LoanLens
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {link.label}
            </a>
          ))}

          <div className={`w-px h-4 ${dark ? 'bg-slate-800' : 'bg-slate-200'}`} />

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${dark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            aria-label="Toggle dark mode"
          >
            {dark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
          </button>

          <a
            href="https://loanlense-universal-loan.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-bold px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-all shadow-md shadow-primary-500/20 active:scale-95`}
          >
            Launch App
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${dark ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
            aria-label="Toggle dark mode"
          >
            {dark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 transition-colors ${dark ? 'text-slate-400' : 'text-slate-600'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-3 transition-colors ${dark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium ${dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://loanlense-universal-loan.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-2.5 rounded-lg bg-primary-600 text-white text-sm font-bold"
            >
              Launch App
            </a>
        </div>
      )}
    </nav>
  );
}

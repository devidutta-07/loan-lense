import { useDarkMode } from '../context/DarkModeContext';

const links = [
  { name: 'GitHub', href: 'https://github.com/devidutta-07', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/devidutta-parida/', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { name: 'Kaggle', href: 'https://www.kaggle.com/deviduttaparida', icon: 'M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.014.259-.093.329l-6.768 6.664 7.037 8.322c.07.089.073.189.022.294z' },
];

export default function Footer() {
  const { dark } = useDarkMode();

  return (
    <footer className={`px-6 py-16 transition-colors duration-300 ${dark ? 'bg-[#0a0f1e] border-t border-slate-800' : 'bg-slate-900 border-t border-slate-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Developer Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white overflow-hidden ring-4 ring-primary-500/20">
                 <span className="font-bold">DP</span>
              </div>
              <div>
                <h3 className="text-white font-bold tracking-tight">Devidutta Parida</h3>
                <p className="text-primary-400 text-xs font-medium">Data Scientist</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Specializing in building end-to-end AI solutions that bridge the gap between advanced modeling and intuitive user experiences.
            </p>
            <div className="flex gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-all active:scale-95 shadow-lg"
                  aria-label={link.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={link.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* System Column */}
          <div className="md:text-right flex flex-col items-start md:items-end">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                System Status: v1.2.0
             </div>
             <p className="text-slate-400 text-sm mb-4">
                Architecture built with React, Vite, and Tailwind CSS. Backed by XGBoost Intelligence.
             </p>
             <a 
                href="mailto:deviduttame32@gmail.com" 
                className="text-white font-semibold text-sm hover:text-primary-400 transition-colors flex items-center gap-2"
             >
                Contact Developer
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            © {new Date().getFullYear()} LoanLens. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-500 text-xs uppercase tracking-widest font-bold">
            <span className="hover:text-slate-300 transition-colors cursor-default">Privacy</span>
            <span className="hover:text-slate-300 transition-colors cursor-default">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

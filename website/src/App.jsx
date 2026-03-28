import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PredictionForm from './components/PredictionForm';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <PredictionForm />
        <TechStack />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

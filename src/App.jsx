import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import WaitlistCTA from './components/WaitlistCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      <main className="snap-y snap-mandatory overflow-x-hidden">
        <section className="snap-start"><Hero /></section>
        <section className="snap-start"><Features /></section>
        <section className="snap-start"><SocialProof /></section>
        <section className="snap-start"><WaitlistCTA /></section>
      </main>
    </div>
  );
}

export default App;

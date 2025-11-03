import Hero from './components/Hero';
import Features from './components/Features';
import WaitlistCTA from './components/WaitlistCTA';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      <main className="snap-y snap-mandatory overflow-x-hidden">
        <section className="snap-start"><Hero /></section>
        <section className="snap-start"><Features /></section>
        <section className="snap-start" id="waitlist"><WaitlistCTA /></section>
        <section className="snap-start"><Pricing /></section>
      </main>
    </div>
  );
}

export default App;

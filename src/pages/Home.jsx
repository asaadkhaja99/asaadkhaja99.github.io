import { LinkRow } from '../components/LinkRow';
import { NotesSection } from '../components/NotesSection';

function Hero() {
  return (
    <header className="hero" id="whoami">
      <div className="hero-stack">
        <h1>asaad khwaja</h1>
        <p>applied ai engineer</p>
        <LinkRow />
      </div>
    </header>
  );
}

export function Home() {
  return (
    <main className="page">
      <Hero />
      <NotesSection />
    </main>
  );
}

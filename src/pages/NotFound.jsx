import { Link } from 'react-router-dom';
import { StickyBanner } from '../components/StickyBanner';

export function NotFound() {
  return (
    <main className="page subpage">
      <StickyBanner sticky={false} />
      <section className="not-found">
        <h1>page not found</h1>
        <Link to="/">return home</Link>
      </section>
    </main>
  );
}

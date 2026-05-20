import { NotesList } from '../components/NotesList';
import { StickyBanner } from '../components/StickyBanner';

export function Blog() {
  return (
    <main className="page subpage">
      <StickyBanner sticky={false} />
      <section className="notes-index" aria-label="Blog posts">
        <div className="section-label">Blog</div>
        <div>
          <NotesList />
        </div>
      </section>
    </main>
  );
}

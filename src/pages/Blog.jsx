import { NotesList } from '../components/NotesList';
import { StickyBanner } from '../components/StickyBanner';

export function Blog() {
  return (
    <main className="page subpage">
      <StickyBanner sticky={false} />
      <section className="notes-index" aria-labelledby="blog-index-heading">
        <div className="section-label">blog</div>
        <div>
          <h1 id="blog-index-heading">all posts</h1>
          <NotesList />
        </div>
      </section>
    </main>
  );
}

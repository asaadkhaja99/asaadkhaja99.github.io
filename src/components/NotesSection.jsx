import { NotesList } from './NotesList';

export function NotesSection() {
  return (
    <section className="notes-section" id="blog" aria-labelledby="blog-heading">
      <h2 id="blog-heading">blog</h2>
      <NotesList />
    </section>
  );
}

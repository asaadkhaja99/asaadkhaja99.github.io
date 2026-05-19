import { Link } from 'react-router-dom';
import { notes } from '../data/notes';

export function NotesList({ compact = false }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <article className="note" key={note.slug}>
          <time>{note.date}</time>
          <Link className="note-copy" to={`/blog/${note.slug}`}>
            <h3>{note.title}</h3>
            {!compact && <p>{note.summary}</p>}
          </Link>
        </article>
      ))}
    </div>
  );
}

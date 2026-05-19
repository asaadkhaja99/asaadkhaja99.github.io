import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, Navigate, useParams } from 'react-router-dom';
import { StickyBanner } from '../components/StickyBanner';
import { getNoteBySlug } from '../data/notes';

export function Note() {
  const { slug } = useParams();
  const note = getNoteBySlug(slug);

  if (!note) return <Navigate to="/404" replace />;

  return (
    <main className="page subpage">
      <StickyBanner sticky={false} />
      <article className="article-page">
        <Link className="back-link" to="/blog">
          blog
        </Link>
        <header className="article-header">
          <h1>{note.title}</h1>
          <div className="article-dates" aria-label="published and updated dates">
            <time>{note.date}</time>
            <time>{note.updated}</time>
          </div>
        </header>
        <div className="article-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ children, href }) => (
                <a href={href} rel="noreferrer" target="_blank">
                  {children}
                </a>
              ),
            }}
          >
            {note.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

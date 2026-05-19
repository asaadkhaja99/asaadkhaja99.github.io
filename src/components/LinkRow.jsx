import { Link } from 'react-router-dom';
import { links } from '../data/links';

export function LinkRow({ className = '' }) {
  return (
    <nav className={`link-row ${className}`} aria-label="primary links">
      {links.map((link) =>
        link.external ? (
          <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
            {link.label}
          </a>
        ) : (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}

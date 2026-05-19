import { Link } from 'react-router-dom';
import { LinkRow } from './LinkRow';

export function StickyBanner({ sticky = true }) {
  return (
    <div
      className={`sticky-banner ${sticky ? '' : 'static-banner'}`}
      aria-label="site navigation"
    >
      <Link className="brand" to="/">
        asaad khwaja
      </Link>
      <LinkRow className="banner-links" />
    </div>
  );
}

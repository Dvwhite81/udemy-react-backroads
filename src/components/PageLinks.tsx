import { pageLinks } from '../utils/data';
import PageLink from './PageLink';

interface PageLinksProps {
  parentClass: string;
  itemClass: string;
}

const PageLinks = ({ parentClass, itemClass }: PageLinksProps) => (
  <ul className={parentClass} id="nav-links">
    {pageLinks.map((link) => (
      <PageLink key={link.id} link={link} itemClass={itemClass} />
    ))}
  </ul>
);

export default PageLinks;

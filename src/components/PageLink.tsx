import { PageLinkType } from '../utils/types';

interface PageLinkProps {
  link: PageLinkType;
  itemClass: string;
}

const PageLink = ({ link, itemClass }: PageLinkProps) => (
  <li key={link.id}>
    <a href={link.href} className={itemClass}>
      {link.text}
    </a>
  </li>
);

export default PageLink;

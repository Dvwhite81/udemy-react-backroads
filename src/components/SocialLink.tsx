interface SocialLinkProps {
  itemClass: string;
  href: string;
  icon: string;
}

const SocialLink = ({ itemClass, href, icon }: SocialLinkProps) => (
  <li>
    <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
      <i className={icon}></i>
    </a>
  </li>
);

export default SocialLink;

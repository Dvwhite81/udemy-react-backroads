import logo from '../images/logo.svg';
import { socialLinks } from '../utils/data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img className="nav-logo" src={logo} alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <PageLinks parentClass="nav-links" itemClass="nav-link" />

      <ul className="nav-icons">
        {socialLinks.map((link) => (
          <SocialLink key={link.id} {...link} itemClass="nav-icon" />
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;

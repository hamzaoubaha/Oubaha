import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-bracket font-mono">&lt;</span>
            <span className="navbar__logo-name">Hamza</span>
            <span className="navbar__logo-dot gradient-text">.</span>
            <span className="navbar__logo-bracket font-mono">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar__links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) => 
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/contact" className="navbar__cta">
            Hire Me
          </Link>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) => 
                  `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="mobile-menu__cta">
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;


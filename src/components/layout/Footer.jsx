import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personal } from '../../data/portfolio';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_ICONS = [
  { Icon: Github, href: personal.social.github, label: 'GitHub' },
  { Icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
  { Icon: Twitter, href: personal.social.twitter, label: 'Twitter' },
].filter(social => social.href);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__inner">
        {/* Top Row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="font-mono" style={{ color: 'var(--color-text-muted)' }}>&lt;</span>
              <span>Hamza</span>
              <span className="gradient-text">.</span>
              <span className="font-mono" style={{ color: 'var(--color-text-muted)' }}>/&gt;</span>
            </Link>
            <p className="footer__tagline">{personal.tagline}</p>
            <div className="footer__social">
              {SOCIAL_ICONS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav className="footer__nav">
            <p className="footer__nav-title">Navigate</p>
            <ul>
              {FOOTER_LINKS.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact-col">
            <p className="footer__nav-title">Get in Touch</p>
            <a href={`mailto:${personal.email}`} className="footer__email">
              {personal.email}
              <ArrowUpRight size={14} />
            </a>
            {personal.cvUrl && (
              <Link to="/resume" className="footer__cv-link">
                View Resume
              </Link>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom Row */}
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="footer__built">
            Built with <span className="text-accent" style={{ color: 'var(--color-accent)' }}>React</span> &amp; <span className="text-accent" style={{ color: 'var(--color-accent)' }}>Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


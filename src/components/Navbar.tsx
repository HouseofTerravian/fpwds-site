import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Become a Friend', to: '/become-a-friend' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: '68px',
    backgroundColor: scrolled ? 'rgba(250,250,248,0.97)' : '#FAFAF8',
    borderBottom: `1px solid ${scrolled ? '#DDD8D0' : 'transparent'}`,
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    transition: 'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1,
    textDecoration: 'none',
  };

  const logoMainStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#1B4332',
    letterSpacing: '-0.03em',
  };

  const logoSubStyle: React.CSSProperties = {
    fontSize: '0.65rem',
    fontWeight: 500,
    color: '#6B7280',
    letterSpacing: '0.04em',
    marginTop: '1px',
  };

  const desktopLinksStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    listStyle: 'none',
  };

  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '0.4rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: isActive ? '#1B4332' : '#1A1A1A',
    backgroundColor: isActive ? 'rgba(27,67,50,0.08)' : 'transparent',
    transition: 'color 0.15s ease, background-color 0.15s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
  });

  const ctaStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.55rem 1.2rem',
    borderRadius: '999px',
    fontSize: '0.9rem',
    fontWeight: 700,
    backgroundColor: '#FF6B35',
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  };

  const hamburgerStyle: React.CSSProperties = {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '4px',
    borderRadius: '8px',
  };

  const barStyle = (open: boolean, idx: number): React.CSSProperties => {
    const transforms: Record<number, string> = {
      0: open ? 'translateY(7px) rotate(45deg)' : 'none',
      1: open ? 'scaleX(0)' : 'none',
      2: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
    };
    return {
      width: '22px',
      height: '2px',
      backgroundColor: '#1A1A1A',
      borderRadius: '2px',
      transition: 'transform 0.25s ease, opacity 0.25s ease',
      transform: transforms[idx],
      opacity: idx === 1 && open ? 0 : 1,
    };
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    top: '68px',
    left: 0,
    right: 0,
    backgroundColor: '#FAFAF8',
    borderBottom: '1px solid #DDD8D0',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    padding: '1rem 2rem 1.5rem',
    zIndex: 999,
    display: menuOpen ? 'block' : 'none',
  };

  const mobileLinkStyle = (isActive: boolean): React.CSSProperties => ({
    display: 'block',
    padding: '0.75rem 0',
    fontSize: '1rem',
    fontWeight: isActive ? 700 : 500,
    color: isActive ? '#1B4332' : '#1A1A1A',
    borderBottom: '1px solid #F0EDE8',
    textDecoration: 'none',
  });

  return (
    <>
      <nav style={navStyle}>
        <div style={innerStyle}>
          {/* Logo */}
          <Link to="/" style={logoStyle}>
            <span style={logoMainStyle}>FPWDs</span>
            <span style={logoSubStyle}>Friends of People With Disabilities</span>
          </Link>

          {/* Desktop Nav */}
          <ul style={desktopLinksStyle} className="nav-desktop">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  style={linkStyle(location.pathname === link.to)}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.to) {
                      (e.target as HTMLElement).style.backgroundColor = '#F0EDE8';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.to) {
                      (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/find"
            style={ctaStyle}
            className="nav-cta"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#e85a25';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#FF6B35';
              (e.currentTarget as HTMLElement).style.transform = 'none';
            }}
          >
            Find a Friend
          </Link>

          {/* Hamburger */}
          <button
            style={hamburgerStyle}
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span style={barStyle(menuOpen, 0)} />
            <span style={barStyle(menuOpen, 1)} />
            <span style={barStyle(menuOpen, 2)} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={mobileLinkStyle(location.pathname === link.to)}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: '1rem' }}>
          <Link to="/find" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
            Find a Friend
          </Link>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: '68px' }} />

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}

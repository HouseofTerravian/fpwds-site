import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { label: 'Find a Friend', to: '/find' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Become a Friend', to: '/become-a-friend' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#1B4332',
    color: '#FFFFFF',
    marginTop: 'auto',
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 2rem 2rem',
  };

  const topStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '2rem',
    alignItems: 'start',
    marginBottom: '2rem',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    maxWidth: '360px',
  };

  const logoMainStyle: React.CSSProperties = {
    fontSize: '1.75rem',
    fontWeight: 800,
    color: '#FFFFFF',
    letterSpacing: '-0.03em',
    lineHeight: 1,
    textDecoration: 'none',
    display: 'inline-block',
  };

  const logoTaglineStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.7)',
    fontStyle: 'italic',
  };

  const logoDescStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.55)',
    lineHeight: 1.6,
    marginTop: '0.25rem',
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    alignItems: 'flex-end',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    transition: 'color 0.15s ease',
  };

  const dividerStyle: React.CSSProperties = {
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.12)',
    margin: '0 0 1.5rem',
  };

  const bottomStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const copyrightStyle: React.CSSProperties = {
    fontSize: '0.825rem',
    color: 'rgba(255,255,255,0.6)',
  };

  const domainsStyle: React.CSSProperties = {
    fontSize: '0.825rem',
    color: 'rgba(255,255,255,0.5)',
  };

  const disclaimerStyle: React.CSSProperties = {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.45)',
    lineHeight: 1.5,
    marginTop: '0.25rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <div style={topStyle} className="footer-top">
          {/* Brand */}
          <div style={logoStyle}>
            <Link to="/" style={logoMainStyle}>FPWDs</Link>
            <p style={logoTaglineStyle}>A friend, when you need one.</p>
            <p style={logoDescStyle}>
              Paid friendship and emotional connection for people with disabilities, caregivers, and their communities. Not therapy. Not coaching. Just a real friend.
            </p>
          </div>

          {/* Nav Links */}
          <nav style={navStyle}>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={linkStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)'; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <hr style={dividerStyle} />

        <div style={bottomStyle}>
          <p style={copyrightStyle}>© Chude Muonelo. All rights reserved.</p>
          <p style={domainsStyle}>
            fpwds.online&nbsp;&nbsp;|&nbsp;&nbsp;fpwds.org
          </p>
          <p style={disclaimerStyle}>
            FPWDs is not a therapy service. For mental health emergencies, call or text&nbsp;
            <strong style={{ color: 'rgba(255,255,255,0.65)' }}>988</strong>.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-top {
            grid-template-columns: 1fr !important;
          }
          .footer-top > nav {
            align-items: flex-start !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 0.75rem 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

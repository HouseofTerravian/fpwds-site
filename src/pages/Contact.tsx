import { useState } from 'react';

const REASONS = [
  'I want to find a Friend',
  'I want to become a FPWDs Friend',
  'Patron / Gifted Hours inquiry',
  'Employer or organization inquiry',
  'Press or media',
  'General question',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1.5px solid #DDD8D0',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#1A1A1A',
    marginBottom: '0.4rem',
  };

  return (
    <main style={{ backgroundColor: '#FAFAF8' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(160deg, #1B4332 0%, #2D6A4F 100%)',
        padding: '3.5rem 0',
        color: '#FFFFFF',
      }}>
        <div className="container">
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,107,53,0.2)',
            color: '#FF6B35',
            border: '1px solid rgba(255,107,53,0.3)',
            padding: '0.3rem 0.85rem',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Get in touch
          </span>
          <h1 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>Contact</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '480px' }}>
            We read every message. We're a small team, so expect a response within 2–3 business days.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '3rem',
            alignItems: 'start',
          }} className="contact-grid">

            {/* Left: Info */}
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>Let's talk.</h2>
              <p style={{ color: '#6B7280', lineHeight: 1.65, marginBottom: '2rem' }}>
                Whether you're looking for a Friend, applying to become one, or exploring Patron/gifted hours for your organization — we're happy to hear from you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    icon: '🌐',
                    label: 'Websites',
                    content: (
                      <>
                        <a href="https://friendsofpeoplewithdisabilities.com" target="_blank" rel="noopener noreferrer"
                          style={{ color: '#1B4332', fontWeight: 600, display: 'block' }}>
                          friendsofpeoplewithdisabilities.com
                        </a>
                        <a href="https://fpwds.org" target="_blank" rel="noopener noreferrer"
                          style={{ color: '#1B4332', fontWeight: 600, display: 'block' }}>
                          fpwds.org
                        </a>
                      </>
                    ),
                  },
                  {
                    icon: '✉️',
                    label: 'General Inquiries',
                    content: (
                      <a href="mailto:hello@fpwds.org" style={{ color: '#1B4332', fontWeight: 600 }}>
                        hello@fpwds.org
                      </a>
                    ),
                  },
                  {
                    icon: '🤝',
                    label: 'Friend Applications',
                    content: (
                      <a href="mailto:friends@fpwds.org" style={{ color: '#1B4332', fontWeight: 600 }}>
                        friends@fpwds.org
                      </a>
                    ),
                  },
                  {
                    icon: '🏢',
                    label: 'Employers & Organizations',
                    content: (
                      <a href="mailto:partners@fpwds.org" style={{ color: '#1B4332', fontWeight: 600 }}>
                        partners@fpwds.org
                      </a>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    border: '1px solid #DDD8D0',
                  }}>
                    <div style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '1px' }}>{item.icon}</div>
                    <div>
                      <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                        {item.label}
                      </p>
                      <div style={{ fontSize: '0.9rem' }}>{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Crisis Note */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1.1rem',
                backgroundColor: 'rgba(239,68,68,0.06)',
                borderRadius: '8px',
                border: '1px solid rgba(239,68,68,0.15)',
              }}>
                <p style={{ fontSize: '0.825rem', color: '#6B7280', lineHeight: 1.55 }}>
                  <strong style={{ color: '#DC2626' }}>Not a crisis service.</strong> If you are experiencing a mental health emergency, please call or text <strong>988</strong> (Suicide & Crisis Lifeline).
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #DDD8D0',
                  padding: '3rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    backgroundColor: 'rgba(27,67,50,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', margin: '0 auto 1.25rem',
                    color: '#1B4332', fontWeight: 700,
                  }}>
                    ✓
                  </div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Message sent!</h3>
                  <p style={{ color: '#6B7280', lineHeight: 1.65 }}>
                    Thanks, {form.name}. We'll be in touch within 2–3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #DDD8D0',
                  padding: '2.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}>
                  <h3 style={{ marginBottom: '1.5rem' }}>Send us a message</h3>

                  <div style={{ marginBottom: '1.1rem' }}>
                    <label style={labelStyle} htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.1rem' }}>
                    <label style={labelStyle} htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.1rem' }}>
                    <label style={labelStyle} htmlFor="reason">What's this about? *</label>
                    <select
                      id="reason"
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      required
                      style={{
                        ...inputStyle,
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 14px center',
                        paddingRight: '2.5rem',
                        cursor: 'pointer',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                    >
                      <option value="">Select a reason</option>
                      {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle} htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind…"
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-accent btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Send Message
                  </button>

                  <p style={{ fontSize: '0.78rem', color: '#6B7280', textAlign: 'center', marginTop: '1rem' }}>
                    We typically respond within 2–3 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

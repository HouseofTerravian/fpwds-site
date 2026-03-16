import { Link } from 'react-router-dom';

const STEPS = [
  {
    number: '01',
    icon: '🔍',
    title: 'Choose Your Friend',
    subtitle: 'Browse the directory. Filter by what matters.',
    color: '#1B4332',
    details: [
      'Browse 10+ trained, vetted companions across the Philippines, Kenya, Ghana, and India.',
      'Filter by specialty — Loneliness & Isolation, Caregiver Support, Chronic Pain, and more.',
      'Filter by language, availability, and rate tier to find the right fit for your life.',
      'Read first-person bios written by the Friends themselves. See real ratings from real sessions.',
      'No algorithm. No "suggested matches." You choose, with full information.',
    ],
  },
  {
    number: '02',
    icon: '📅',
    title: 'Book a Session',
    subtitle: 'Simple, direct, no intake forms.',
    color: '#FF6B35',
    details: [
      'Select your friend, choose a time from their available hours, and pick your rate tier.',
      'Community Rate ($15/hr) — for SSDI recipients and limited-income members.',
      'Sustainer Rate ($30/hr) — for caregivers, allies, and those who want to subsidize others.',
      'Patron / Gifted Hours ($50+/hr) — for employers, churches, and donors buying hours for others.',
      'No referral required. No insurance. No diagnosis. No waiting list.',
      'Sessions run via video or phone — whatever you\'re comfortable with.',
    ],
  },
  {
    number: '03',
    icon: '💬',
    title: 'Just Talk',
    subtitle: 'You bring yourself. We take it from there.',
    color: '#2D6A4F',
    details: [
      'Your Friend shows up on time, engaged, and genuinely interested in you — not your diagnosis.',
      'There\'s no agenda. No homework. No growth plan. Just a real conversation.',
      'Talk about your day, your frustrations, your memories, your funniest story from last week.',
      'Sessions are private. Your Friend is trained in active listening and confidentiality.',
      'After the session, leave a rating and optional note. Build a relationship over time if you choose.',
    ],
  },
];

const FAQS = [
  {
    q: 'Is my FPWDs Friend a therapist?',
    a: 'No. FPWDs Friends are not therapists, counselors, or any kind of licensed mental health professional. They are trained companions — think of it like having a warm, consistent pen pal who you actually talk to. If you need clinical mental health support, please reach out to a licensed provider or call 988.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'You can reschedule or cancel up to 24 hours before your session at no charge. Cancellations within 24 hours may result in a partial fee.',
  },
  {
    q: 'How are Friends screened?',
    a: 'Every FPWDs Friend completes an application, a background review, an interview, and orientation training before joining the platform. We prioritize people with lived experience adjacent to disability — caregivers, people with disabilities themselves, and community workers.',
  },
  {
    q: 'What if I don\'t click with my Friend?',
    a: 'That\'s completely normal. You\'re free to book with a different Friend at any time. Our directory is there so you can choose based on genuine fit, not just availability.',
  },
  {
    q: 'Can I book recurring sessions?',
    a: 'Yes — and we encourage it. Consistent connection is more valuable than one-off sessions. Talk to your Friend about setting a regular weekly or bi-weekly time.',
  },
  {
    q: 'What happens with Patron / Gifted Hours?',
    a: 'Patron purchases create a pool of subsidized sessions that FPWDs allocates to Community Rate members who apply for gifted hours. Employers and organizations can also bulk-purchase hours for specific individuals or employee groups.',
  },
];

export default function HowItWorks() {
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
            Simple by design
          </span>
          <h1 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>How It Works</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '520px' }}>
            Three steps. No jargon. No intake forms. Just you and a real person who's glad to hear from you.
          </p>
        </div>
      </section>

      {/* Steps Detail */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {STEPS.map((step, idx) => (
              <div key={step.number} style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr',
                gap: '3rem',
                alignItems: 'center',
              }} className="step-grid">
                {/* Illustration Block */}
                {idx % 2 !== 0 && (
                  <div style={{
                    backgroundColor: step.color,
                    borderRadius: '20px',
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '260px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    order: 2,
                  }} className="step-visual">
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{step.icon}</div>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                      Step {step.number}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.25rem' }}>
                      {step.subtitle}
                    </p>
                  </div>
                )}

                {/* Text Block */}
                <div style={{ order: idx % 2 !== 0 ? 1 : 'unset' } as React.CSSProperties}>
                  <div style={{
                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
                    color: '#FF6B35', marginBottom: '0.5rem',
                  }}>
                    STEP {step.number}
                  </div>
                  <h2 style={{ marginBottom: '0.5rem' }}>{step.title}</h2>
                  <p style={{ color: '#6B7280', marginBottom: '1.5rem', fontSize: '1rem' }}>{step.subtitle}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {step.details.map((detail, i) => (
                      <li key={i} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                        fontSize: '0.925rem', color: '#1A1A1A',
                      }}>
                        <span style={{
                          width: '20px', height: '20px', borderRadius: '50%',
                          backgroundColor: step.color, color: '#FFFFFF',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.65rem', fontWeight: 700, flexShrink: 0, marginTop: '1px',
                        }}>
                          ✓
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration for even steps */}
                {idx % 2 === 0 && (
                  <div style={{
                    backgroundColor: step.color,
                    borderRadius: '20px',
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '260px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                  }} className="step-visual">
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{step.icon}</div>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                      Step {step.number}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.25rem' }}>
                      {step.subtitle}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F0EDE8', padding: '5rem 0' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Questions we get a lot.</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #DDD8D0',
              }}>
                <h4 style={{ marginBottom: '0.6rem', color: '#1B4332' }}>{faq.q}</h4>
                <p style={{ fontSize: '0.925rem', color: '#6B7280', lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1rem' }}>Ready to find your person?</h2>
          <p style={{ color: '#6B7280', marginBottom: '2rem', fontSize: '1.05rem' }}>
            It takes less than two minutes to browse the directory and find someone who fits.
          </p>
          <Link to="/find" className="btn btn-accent btn-lg">
            Browse the Directory
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .step-grid {
            grid-template-columns: 1fr !important;
          }
          .step-visual {
            order: -1 !important;
            min-height: 180px !important;
            padding: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}

import { Link } from 'react-router-dom';

const TIERS = [
  {
    id: 'community',
    name: 'Community Rate',
    price: '$15',
    unit: '/hour',
    tagline: 'Dignity-first access',
    who: 'SSDI recipients · fixed-income members · anyone with limited resources',
    highlight: false,
    color: '#1B4332',
    features: [
      'Full access to all FPWDs Friends',
      'Video or phone sessions',
      'Recurring bookings available',
      'Secure, private messaging',
      'Session rating & notes',
      'Cancel or reschedule up to 24hrs',
    ],
    note: 'This rate is made possible by Sustainer and Patron members. No proof of income required — we operate on the honor system.',
  },
  {
    id: 'sustainer',
    name: 'Sustainer Rate',
    price: '$30',
    unit: '/hour',
    tagline: 'For those who get it',
    who: 'Caregivers · burned-out parents · allies · working adults',
    highlight: true,
    color: '#FF6B35',
    features: [
      'Full access to all FPWDs Friends',
      'Video or phone sessions',
      'Recurring bookings available',
      'Priority scheduling windows',
      'Session rating & notes',
      'Cancel or reschedule up to 24hrs',
      '$15 of each session subsidizes Community members',
    ],
    note: 'Sustainer members are the backbone of FPWDs. Your rate directly funds access for people who can\'t afford market rates for connection.',
  },
  {
    id: 'patron',
    name: 'Patron / Gifted Hours',
    price: '$50+',
    unit: '/hour',
    tagline: 'Give the gift of a friend',
    who: 'Employers · churches · corporations · individual donors',
    highlight: false,
    color: '#1B4332',
    features: [
      'Bulk-purchase session hours',
      'Gift hours to named individuals',
      'Contribute to the Community pool',
      'Employer / org acknowledgment',
      'Custom invoice for tax purposes',
      'Impact report on gifted sessions',
    ],
    note: 'Patron hours go into a pool that FPWDs distributes to Community members applying for gifted sessions. Organizations can also designate recipients.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Price per hour', community: '$15', sustainer: '$30', patron: '$50+' },
  { label: 'Full directory access', community: '✓', sustainer: '✓', patron: '✓' },
  { label: 'Video + phone sessions', community: '✓', sustainer: '✓', patron: '✓' },
  { label: 'Recurring bookings', community: '✓', sustainer: '✓', patron: '✓' },
  { label: 'Priority scheduling', community: '—', sustainer: '✓', patron: '✓' },
  { label: 'Subsidizes Community access', community: '—', sustainer: '✓', patron: '✓' },
  { label: 'Gift sessions to others', community: '—', sustainer: '—', patron: '✓' },
  { label: 'Bulk org / employer invoicing', community: '—', sustainer: '—', patron: '✓' },
];

export default function Pricing() {
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
            Transparent pricing
          </span>
          <h1 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>Pricing</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '540px' }}>
            A tiered model that makes human connection accessible at every income level. Higher-rate members directly subsidize access for those who need it most.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'start',
          }} className="tiers-grid">
            {TIERS.map((tier) => (
              <div key={tier.id} style={{
                backgroundColor: tier.highlight ? '#1B4332' : '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem',
                border: tier.highlight ? 'none' : '1px solid #DDD8D0',
                boxShadow: tier.highlight
                  ? '0 20px 48px rgba(27,67,50,0.22), 0 8px 16px rgba(27,67,50,0.12)'
                  : '0 1px 3px rgba(0,0,0,0.06)',
                position: 'relative',
                transform: tier.highlight ? 'scale(1.03)' : 'none',
              }}>
                {tier.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#FF6B35',
                    color: '#FFFFFF',
                    padding: '0.3rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                  color: tier.highlight ? 'rgba(255,255,255,0.55)' : '#FF6B35',
                  textTransform: 'uppercase', marginBottom: '0.5rem',
                }}>
                  {tier.name}
                </div>

                <p style={{
                  fontSize: '0.875rem',
                  color: tier.highlight ? 'rgba(255,255,255,0.65)' : '#6B7280',
                  marginBottom: '1rem',
                }}>
                  {tier.tagline}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '0.5rem' }}>
                  <span style={{
                    fontSize: '3rem', fontWeight: 800, lineHeight: 1,
                    color: tier.highlight ? '#FFFFFF' : '#1B4332',
                  }}>
                    {tier.price}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: tier.highlight ? 'rgba(255,255,255,0.55)' : '#6B7280' }}>
                    {tier.unit}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.8rem',
                  color: tier.highlight ? 'rgba(255,255,255,0.6)' : '#6B7280',
                  marginBottom: '1.5rem',
                  lineHeight: 1.5,
                }}>
                  {tier.who}
                </p>

                <hr style={{
                  border: 'none',
                  borderTop: tier.highlight ? '1px solid rgba(255,255,255,0.12)' : '1px solid #DDD8D0',
                  marginBottom: '1.25rem',
                }} />

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                      fontSize: '0.875rem',
                      color: tier.highlight ? 'rgba(255,255,255,0.82)' : '#1A1A1A',
                    }}>
                      <span style={{
                        color: tier.highlight ? '#4ADE80' : '#1B4332',
                        fontWeight: 700, flexShrink: 0, marginTop: '1px',
                      }}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{
                  backgroundColor: tier.highlight ? 'rgba(255,255,255,0.08)' : '#F0EDE8',
                  borderRadius: '8px',
                  padding: '0.9rem',
                  marginBottom: '1.5rem',
                }}>
                  <p style={{
                    fontSize: '0.8rem',
                    color: tier.highlight ? 'rgba(255,255,255,0.65)' : '#6B7280',
                    lineHeight: 1.55,
                    margin: 0,
                  }}>
                    {tier.note}
                  </p>
                </div>

                <Link to="/find" className="btn" style={{
                  width: '100%',
                  justifyContent: 'center',
                  backgroundColor: tier.highlight ? '#FF6B35' : 'transparent',
                  color: tier.highlight ? '#FFFFFF' : '#1B4332',
                  border: tier.highlight ? 'none' : '2px solid #1B4332',
                  borderRadius: '999px',
                  fontWeight: 700,
                }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ backgroundColor: '#F0EDE8', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Side by side</span>
            <h2 className="section-title">Compare all tiers</h2>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #DDD8D0',
            overflow: 'hidden',
            overflowX: 'auto',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}>
              <thead>
                <tr style={{ backgroundColor: '#F0EDE8' }}>
                  <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.875rem', color: '#6B7280', fontWeight: 600, width: '40%' }}>Feature</th>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'center', fontSize: '0.875rem', color: '#1B4332', fontWeight: 700 }}>Community<br /><span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#6B7280' }}>$15/hr</span></th>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'center', fontSize: '0.875rem', color: '#1B4332', fontWeight: 700, backgroundColor: 'rgba(27,67,50,0.06)' }}>Sustainer<br /><span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#6B7280' }}>$30/hr</span></th>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'center', fontSize: '0.875rem', color: '#1B4332', fontWeight: 700 }}>Patron<br /><span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#6B7280' }}>$50+/hr</span></th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.label} style={{ borderTop: '1px solid #DDD8D0', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FAFAF8' }}>
                    <td style={{ padding: '0.85rem 1.5rem', fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>{row.label}</td>
                    <td style={{ padding: '0.85rem 1.25rem', textAlign: 'center', fontSize: '0.9rem', color: row.community === '✓' ? '#1B4332' : row.community === '—' ? '#DDD8D0' : '#1A1A1A', fontWeight: row.community === '✓' ? 700 : 400 }}>{row.community}</td>
                    <td style={{ padding: '0.85rem 1.25rem', textAlign: 'center', fontSize: '0.9rem', color: row.sustainer === '✓' ? '#1B4332' : row.sustainer === '—' ? '#DDD8D0' : '#1A1A1A', fontWeight: row.sustainer === '✓' ? 700 : 400, backgroundColor: 'rgba(27,67,50,0.04)' }}>{row.sustainer}</td>
                    <td style={{ padding: '0.85rem 1.25rem', textAlign: 'center', fontSize: '0.9rem', color: row.patron === '✓' ? '#1B4332' : row.patron === '—' ? '#DDD8D0' : '#1A1A1A', fontWeight: row.patron === '✓' ? 700 : 400 }}>{row.patron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Patron Explainer */}
      <section className="section">
        <div className="container-narrow">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
          }} className="patron-grid">
            <div>
              <span className="section-label">For organizations</span>
              <h2 style={{ marginBottom: '1rem' }}>Gifted Hours — how it works.</h2>
              <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: '1rem' }}>
                Employers, churches, nonprofits, and individual donors can purchase session hours at the Patron rate ($50+/hr) and direct them two ways:
              </p>
              <ol style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '0' }}>
                {[
                  { num: '1.', label: 'Into the Community Pool', desc: 'Hours are allocated by FPWDs to members who apply for gifted sessions.' },
                  { num: '2.', label: 'To Named Recipients', desc: 'Designate hours for a specific individual — an employee, a client, a family member, or a community member.' },
                ].map((item) => (
                  <li key={item.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      backgroundColor: '#1B4332', color: '#FFFFFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.8rem', fontWeight: 700, flexShrink: 0, marginTop: '1px',
                    }}>{item.num.replace('.', '')}</span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.925rem', marginBottom: '0.2rem' }}>{item.label}</strong>
                      <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/contact" className="btn btn-primary">
                  Inquire about Patron hours
                </Link>
              </div>
            </div>

            <div style={{
              backgroundColor: '#1B4332',
              borderRadius: '20px',
              padding: '2.5rem',
              color: '#FFFFFF',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
                "We bought 20 hours for our team."
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, fontSize: '0.925rem', marginBottom: '1rem' }}>
                Three of our employees have family members with disabilities. This was the most meaningful benefit we've ever offered. It cost less than a catered lunch.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>— HR Director, mid-size nonprofit</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .tiers-grid {
            grid-template-columns: 1fr !important;
          }
          .tiers-grid > div {
            transform: none !important;
          }
        }
        @media (max-width: 640px) {
          .patron-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

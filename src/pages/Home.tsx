import { Link } from 'react-router-dom';

function Avatar({ initials, color, size = 56 }: { initials: string; color: string; size?: number }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: size * 0.3,
      flexShrink: 0,
      letterSpacing: '0.03em',
    }}>
      {initials}
    </div>
  );
}

const STEPS = [
  {
    number: '01',
    title: 'Browse the Directory',
    desc: 'Filter by specialty, language, and availability. Every friend has a bio, rating, and rate tier so you can find the right fit.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Book a Session',
    desc: 'Choose your time, choose your rate tier. No long intake forms. No referrals. No waitlists.',
    icon: '📅',
  },
  {
    number: '03',
    title: 'Just Talk',
    desc: 'Show up as you are. Your FPWDs Friend meets you there — curious, unhurried, and genuinely glad you called.',
    icon: '💬',
  },
];

const PREVIEW_FRIENDS = [
  { initials: 'MS', color: '#2D6A4F', name: 'Maria S.', country: '🇵🇭', specialty: 'Loneliness & Isolation', rate: '$15/hr' },
  { initials: 'DO', color: '#1B4332', name: 'Daniel O.', country: '🇰🇪', specialty: 'Caregiver Support', rate: '$30/hr' },
  { initials: 'PN', color: '#5A3E85', name: 'Priya N.', country: '🇮🇳', specialty: 'Chronic Pain', rate: '$15/hr' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #1B4332 0%, #2D6A4F 100%)',
        color: '#FFFFFF',
        padding: '5rem 0 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-60px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(255,107,53,0.2)',
              color: '#FF6B35',
              border: '1px solid rgba(255,107,53,0.3)',
              padding: '0.3rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              A social utility. Not charity.
            </span>

            <h1 style={{ color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Talk to someone<br />who gets it.
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.82)',
              marginBottom: '2rem',
              lineHeight: 1.6,
              maxWidth: '540px',
            }}>
              FPWDs connects you with trained, empathetic Friends — real people who show up, listen, and stay. Starting at $15/hour.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/find" className="btn btn-accent btn-lg">
                Find a Friend
              </Link>
              <Link to="/how-it-works" className="btn btn-outline-white btn-lg">
                How It Works
              </Link>
            </div>

            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '2.5rem' }}>
              <div style={{ display: 'flex' }}>
                {PREVIEW_FRIENDS.map((f, i) => (
                  <div key={f.name} style={{ marginLeft: i > 0 ? '-10px' : 0, border: '2px solid #2D6A4F', borderRadius: '50%' }}>
                    <Avatar initials={f.initials} color={f.color} size={36} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                <strong style={{ color: '#FFFFFF' }}>10+ Friends</strong> across Philippines, Kenya, Ghana & India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What FPWDs Is / Isn't */}
      <section style={{ backgroundColor: '#F0EDE8', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">The difference</span>
            <h2 className="section-title">Let's be clear about what this is.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              FPWDs was built because the gap between "I need a therapist" and "I just need a friend" is very real — and very expensive to fall into.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {/* What It's NOT */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid #DDD8D0',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(239,68,68,0.1)', color: '#DC2626',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem', marginBottom: '1.25rem',
              }}>
                ✕
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#1A1A1A' }}>What FPWDs is NOT</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Therapy or mental health treatment',
                  'Life coaching or personal development',
                  'Case management or care coordination',
                  'A charity or pity service',
                  'A crisis intervention hotline',
                  'Medical or clinical advice',
                ].map((item) => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                    fontSize: '0.925rem', color: '#6B7280',
                  }}>
                    <span style={{ color: '#DC2626', fontWeight: 700, marginTop: '1px', flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What It IS */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '2rem',
              border: '2px solid #1B4332',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(27,67,50,0.1)', color: '#1B4332',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem', marginBottom: '1.25rem',
              }}>
                ✓
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#1B4332' }}>What FPWDs IS</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Paid, consistent human companionship',
                  'Someone who listens without an agenda',
                  'Connection for people who are isolated',
                  'Support for burned-out caregivers',
                  'Affordable at $15/hr for SSDI recipients',
                  'A social utility, like a gym membership for your soul',
                ].map((item) => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                    fontSize: '0.925rem', color: '#1A1A1A',
                  }}>
                    <span style={{ color: '#1B4332', fontWeight: 700, marginTop: '1px', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The Why */}
            <div style={{
              backgroundColor: '#1B4332',
              borderRadius: '12px',
              padding: '2rem',
              color: '#FFFFFF',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem', marginBottom: '1.25rem',
              }}>
                💚
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#FFFFFF' }}>Why it exists</h3>
              <p style={{ fontSize: '0.925rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                People with disabilities report some of the highest rates of chronic loneliness on earth. Not because they don't want connection — but because access is hard, and most "support" comes wrapped in clinical distance or pity.
              </p>
              <p style={{ fontSize: '0.925rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                FPWDs is a dignity-first answer to that. A friend. Just a friend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="section" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Simple by design</span>
            <h2 className="section-title">Three steps to a real connection.</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
          }}>
            {STEPS.map((step) => (
              <div key={step.number} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1rem',
              }}>
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '14px',
                  background: 'rgba(27,67,50,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  {step.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
                    color: '#FF6B35', marginBottom: '0.4rem',
                  }}>
                    STEP {step.number}
                  </div>
                  <h3 style={{ marginBottom: '0.6rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.925rem', color: '#6B7280', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/how-it-works" className="btn btn-outline">
              See the full breakdown
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section style={{ backgroundColor: '#F0EDE8', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Access for every income level.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our tiered model means higher-income members subsidize access for those who need it most.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {[
              {
                tier: 'Community',
                price: '$15',
                unit: '/hour',
                who: 'SSDI / limited income',
                desc: 'For those on disability income, fixed budgets, or anyone who needs ongoing companionship at an accessible rate.',
                color: '#1B4332',
                bg: '#FFFFFF',
                featured: false,
              },
              {
                tier: 'Sustainer',
                price: '$30',
                unit: '/hour',
                who: 'Caregivers & allies',
                desc: 'For burned-out parents, partner caregivers, and anyone who "gets it" and wants to help subsidize Community access.',
                color: '#FFFFFF',
                bg: '#1B4332',
                featured: true,
              },
              {
                tier: 'Patron',
                price: '$50+',
                unit: '/hour',
                who: 'Donors, employers, churches',
                desc: 'Gift sessions to others. Corporations, churches, and donors buy hours that get distributed to Community members.',
                color: '#1B4332',
                bg: '#FFFFFF',
                featured: false,
              },
            ].map((tier) => (
              <div key={tier.tier} style={{
                backgroundColor: tier.bg,
                borderRadius: '16px',
                padding: '2rem',
                border: tier.featured ? 'none' : '1px solid #DDD8D0',
                boxShadow: tier.featured ? '0 12px 32px rgba(27,67,50,0.2)' : '0 1px 3px rgba(0,0,0,0.05)',
                transform: tier.featured ? 'scale(1.02)' : 'none',
                position: 'relative' as const,
              }}>
                {tier.featured && (
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: '#FF6B35', color: '#FFFFFF',
                    padding: '0.25rem 0.85rem', borderRadius: '999px',
                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em',
                    whiteSpace: 'nowrap',
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{
                  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                  color: tier.featured ? 'rgba(255,255,255,0.6)' : '#FF6B35',
                  textTransform: 'uppercase', marginBottom: '0.75rem',
                }}>
                  {tier.tier}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: tier.featured ? '#FFFFFF' : '#1B4332', lineHeight: 1 }}>{tier.price}</span>
                  <span style={{ fontSize: '0.9rem', color: tier.featured ? 'rgba(255,255,255,0.6)' : '#6B7280' }}>{tier.unit}</span>
                </div>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: tier.featured ? 'rgba(255,255,255,0.7)' : '#6B7280', marginBottom: '1rem' }}>
                  {tier.who}
                </p>
                <p style={{ fontSize: '0.875rem', color: tier.featured ? 'rgba(255,255,255,0.8)' : '#6B7280', lineHeight: 1.6 }}>
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/pricing" className="btn btn-primary">
              See full pricing details
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #e8501d 100%)',
        padding: '4rem 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            You don't have to be alone with this.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Browse our directory and find a friend who fits your life right now.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/find" className="btn btn-lg" style={{
              backgroundColor: '#FFFFFF',
              color: '#FF6B35',
              fontWeight: 700,
            }}>
              Find a Friend
            </Link>
            <Link to="/about" className="btn btn-outline-white btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

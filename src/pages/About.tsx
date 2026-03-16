import { Link } from 'react-router-dom';

const VALUES = [
  {
    icon: '🤝',
    title: 'Dignity, Not Pity',
    desc: 'FPWDs exists because people with disabilities deserve connection that doesn\'t come wrapped in charity framing. You\'re not a cause. You\'re a person who wants a friend.',
  },
  {
    icon: '💰',
    title: 'Access, Not Just Aspiration',
    desc: 'Our tiered pricing model means the person on SSDI gets the same quality of connection as anyone else. Community Rate isn\'t lesser — it\'s the point.',
  },
  {
    icon: '🌍',
    title: 'Global + Human',
    desc: 'We partner with companions in the Philippines, Kenya, Ghana, and India — communities with deep cultural values around care, presence, and community.',
  },
  {
    icon: '🚫',
    title: 'Not a Therapy Service',
    desc: 'We\'re clear about what we are. FPWDs Friends are not therapists, coaches, or clinicians. They\'re friends. The distinction matters — and we protect it.',
  },
];

const TEAM_NOTES = [
  'FPWDs was founded on the observation that loneliness among people with disabilities is a structural problem, not a personal failing.',
  'The existing options — therapy, case management, social services — are valuable but insufficient for the day-to-day experience of social isolation.',
  'We built a model that treats human connection as a service worth paying for, in the same way you\'d pay for a gym membership or a haircut.',
  'The overseas partnership model allows us to offer rates that are sustainable for everyone: affordable for members, fair for Friends.',
];

export default function About() {
  return (
    <main style={{ backgroundColor: '#FAFAF8' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(160deg, #1B4332 0%, #2D6A4F 100%)',
        padding: '3.5rem 0 4.5rem',
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
            Our mission
          </span>
          <h1 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>About FPWDs</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.2rem', maxWidth: '560px', lineHeight: 1.65 }}>
            A friend, when you need one. That's the whole idea.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section style={{ backgroundColor: '#FAFAF8', padding: '5rem 0' }}>
        <div className="container-narrow">
          <div style={{
            backgroundColor: '#1B4332',
            borderRadius: '20px',
            padding: '3rem',
            color: '#FFFFFF',
            marginBottom: '3.5rem',
          }}>
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.9)',
              fontStyle: 'italic',
            }}>
              "People with disabilities experience some of the highest rates of chronic loneliness of any group on earth. Not because they don't want connection — but because access is structurally limited, and most 'support' comes wrapped in clinical distance or pity. FPWDs is a dignity-first answer to that. A friend. Just a friend."
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {TEAM_NOTES.map((note, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.25rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #DDD8D0',
              }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  backgroundColor: 'rgba(27,67,50,0.1)',
                  color: '#1B4332', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#1A1A1A' }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Is / Isn't */}
      <section style={{ backgroundColor: '#F0EDE8', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Clarity</span>
            <h2 className="section-title">Let's be precise.</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
          }} className="is-isnt-grid">
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid #DDD8D0',
            }}>
              <h3 style={{ color: '#DC2626', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  backgroundColor: 'rgba(239,68,68,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem',
                }}>✕</span>
                FPWDs is NOT
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  ['Therapy or mental health treatment', 'FPWDs Friends are not licensed providers and do not diagnose or treat.'],
                  ['Life coaching or goal setting', 'There\'s no agenda, no growth plan, no KPIs for your friendship.'],
                  ['Case management', 'We don\'t coordinate services, manage benefits, or navigate systems.'],
                  ['A charity', 'This is a paid service. You\'re a customer, not a recipient.'],
                  ['A crisis line', 'For mental health emergencies, call or text 988.'],
                ].map(([title, sub]) => (
                  <li key={title} style={{ paddingLeft: '0' }}>
                    <strong style={{ fontSize: '0.9rem', display: 'block', color: '#1A1A1A' }}>{title}</strong>
                    <span style={{ fontSize: '0.825rem', color: '#6B7280' }}>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '2rem',
              border: '2px solid #1B4332',
            }}>
              <h3 style={{ color: '#1B4332', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  backgroundColor: 'rgba(27,67,50,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem',
                }}>✓</span>
                FPWDs IS
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  ['Consistent paid companionship', 'Someone who shows up at the same time, every time, with no agenda but you.'],
                  ['A social utility', 'Like a gym for human connection. Accessible, repeatable, normalizing.'],
                  ['Dignity-first access', '$15/hr for SSDI. No means-testing. No intake forms. No diagnosis required.'],
                  ['Emotionally present', 'Your Friend listens. Asks questions. Remembers. Cares.'],
                  ['Cross-cultural, globally sourced', 'Friends from Kenya, Ghana, Philippines, and India — communities where care is a value, not a service.'],
                ].map(([title, sub]) => (
                  <li key={title}>
                    <strong style={{ fontSize: '0.9rem', display: 'block', color: '#1A1A1A' }}>{title}</strong>
                    <span style={{ fontSize: '0.825rem', color: '#6B7280' }}>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Values</span>
            <h2 className="section-title">What we stand for.</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '1.75rem',
                border: '1px solid #DDD8D0',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.85rem' }}>{v.icon}</div>
                <h4 style={{ marginBottom: '0.5rem', color: '#1B4332' }}>{v.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Countries */}
      <section style={{ backgroundColor: '#F0EDE8', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Global reach</span>
            <h2 className="section-title">Our partner countries.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We partner with Friends in countries where cultural values around warmth, community, and care run deep.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {[
              { flag: '🇵🇭', name: 'Philippines', note: 'Known for deep warmth, hospitality, and communal care values.' },
              { flag: '🇰🇪', name: 'Kenya', note: 'Ubuntu culture — "I am because we are." Deeply relational approach to life.' },
              { flag: '🇬🇭', name: 'Ghana', note: 'Strong community traditions and multi-generational care ethos.' },
              { flag: '🇮🇳', name: 'India', note: 'Rich tradition of seva (selfless service) and presence-centered relationships.' },
            ].map((country) => (
              <div key={country.name} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #DDD8D0',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{country.flag}</div>
                <h4 style={{ marginBottom: '0.5rem' }}>{country.name}</h4>
                <p style={{ fontSize: '0.825rem', color: '#6B7280', lineHeight: 1.6 }}>{country.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ marginBottom: '1rem' }}>Ready to experience the difference?</h2>
          <p style={{ color: '#6B7280', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Browse our directory and find a Friend who fits.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/find" className="btn btn-accent btn-lg">Find a Friend</Link>
            <Link to="/become-a-friend" className="btn btn-outline btn-lg">Become a Friend</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .is-isnt-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

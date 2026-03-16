import { useState } from 'react';

const SPECIALTIES = [
  'Loneliness & Isolation',
  'Caregiver Support',
  'Chronic Pain',
  'Mental Health Companion',
  'Physical Disability',
  'Sensory Disabilities',
  'Developmental Disabilities',
];

const COUNTRIES = [
  { value: 'Philippines', label: '🇵🇭 Philippines' },
  { value: 'Kenya', label: '🇰🇪 Kenya' },
  { value: 'Ghana', label: '🇬🇭 Ghana' },
  { value: 'India', label: '🇮🇳 India' },
];

const LANGUAGES = [
  'English', 'Tagalog', 'Ilocano', 'Cebuano',
  'Swahili', 'Kikuyu', 'Luo',
  'Twi', 'Fante', 'Ga',
  'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Bengali',
];

const RATE_TIERS = [
  { value: 'community', label: 'Community · $15/hr — I\'d like to work at the accessible rate' },
  { value: 'sustainer', label: 'Sustainer · $30/hr — I\'m comfortable at the mid-tier rate' },
  { value: 'either', label: 'Either — I\'m flexible on rate' },
];

export default function BecomeAFriend() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    languages: [] as string[],
    specialties: [] as string[],
    rateTier: '',
    availability: '',
    bio: '',
    experience: '',
    whyFPWDs: '',
    hasDisabilityExperience: '',
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleMultiToggle = (field: 'languages' | 'specialties', value: string) => {
    setForm((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
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

  const chipStyle = (selected: boolean): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.4rem 0.85rem',
    borderRadius: '999px',
    fontSize: '0.825rem',
    fontWeight: 600,
    cursor: 'pointer',
    border: `1.5px solid ${selected ? '#1B4332' : '#DDD8D0'}`,
    backgroundColor: selected ? 'rgba(27,67,50,0.1)' : '#FFFFFF',
    color: selected ? '#1B4332' : '#6B7280',
    transition: 'all 0.15s ease',
    userSelect: 'none',
  });

  if (submitted) {
    return (
      <main style={{ backgroundColor: '#FAFAF8', minHeight: '60vh' }}>
        <section style={{ padding: '6rem 0', textAlign: 'center' }}>
          <div className="container-narrow">
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              backgroundColor: 'rgba(27,67,50,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem', margin: '0 auto 1.5rem',
            }}>
              ✓
            </div>
            <h2 style={{ color: '#1B4332', marginBottom: '0.75rem' }}>Application received.</h2>
            <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 2rem' }}>
              Thank you, {form.firstName}. We'll review your application and follow up within 5–7 business days. We look forward to meeting you.
            </p>
            <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
              Questions? Email us at <strong>friends@fpwds.org</strong>
            </p>
          </div>
        </section>
      </main>
    );
  }

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
            Join the team
          </span>
          <h1 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>Become a Friend</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '560px' }}>
            We partner with warm, reliable companions in the Philippines, Kenya, Ghana, and India. If you have the heart for it, we want to hear from you.
          </p>
        </div>
      </section>

      {/* What We're Looking For */}
      <section style={{ backgroundColor: '#F0EDE8', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              { icon: '💬', title: 'A great listener', desc: 'You ask good questions. You\'re not in a hurry. You hold space without trying to fix everything.' },
              { icon: '🌍', title: 'Based in a partner country', desc: 'We currently partner with companions in the Philippines, Kenya, Ghana, and India.' },
              { icon: '⏰', title: 'Consistent availability', desc: 'At least 5 hours per week that you can commit to reliably. Recurring sessions build trust.' },
              { icon: '🤝', title: 'Lived proximity to disability', desc: 'Personal experience, caregiving, community work — we value people who know this world.' },
            ].map((item) => (
              <div key={item.title} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #DDD8D0',
              }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 style={{ marginBottom: '0.4rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">Apply</span>
            <h2 className="section-title">Friend Application</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              This application takes about 10 minutes. Be yourself — we read every one.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #DDD8D0',
            padding: '2.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          }}>

            {/* Section: Basic Info */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F0EDE8' }}>
                Basic Information
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
                <div>
                  <label style={labelStyle} htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Your first name"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Your last name"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }} className="form-row-2">
                <div>
                  <label style={labelStyle} htmlFor="country">Country *</label>
                  <select
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: '2.5rem', cursor: 'pointer' }}
                    onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="city">City / Region</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="e.g. Manila, Nairobi"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>
            </div>

            {/* Section: Languages */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F0EDE8' }}>
                Languages
              </h3>
              <label style={{ ...labelStyle, marginBottom: '0.75rem' }}>
                Which languages do you speak? (Select all that apply) *
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    style={chipStyle(form.languages.includes(lang))}
                    onClick={() => handleMultiToggle('languages', lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Section: Specialties */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F0EDE8' }}>
                Areas of Focus
              </h3>
              <label style={{ ...labelStyle, marginBottom: '0.75rem' }}>
                Which specialty areas feel most natural to you? (Select all that apply) *
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {SPECIALTIES.map((spec) => (
                  <button
                    key={spec}
                    type="button"
                    style={chipStyle(form.specialties.includes(spec))}
                    onClick={() => handleMultiToggle('specialties', spec)}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            {/* Section: Availability & Rate */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F0EDE8' }}>
                Availability & Rate
              </h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle} htmlFor="availability">When are you generally available for sessions? *</label>
                <input
                  id="availability"
                  type="text"
                  name="availability"
                  value={form.availability}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Mon–Fri, 9AM–5PM EST"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="rateTier">Preferred rate tier *</label>
                <select
                  id="rateTier"
                  name="rateTier"
                  value={form.rateTier}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: '2.5rem', cursor: 'pointer' }}
                  onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="">Select rate preference</option>
                  {RATE_TIERS.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                </select>
              </div>
            </div>

            {/* Section: About You */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F0EDE8' }}>
                About You
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle} htmlFor="bio">
                  Write a short bio (2–3 sentences, first-person) — this is what members will see *
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="I'm easy to talk to and I love a slow conversation. I grew up with a younger sibling with cerebral palsy, so I know what it means to show up for someone without an agenda…"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle} htmlFor="experience">
                  Describe your experience with disability — personal, professional, or community *
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your lived experience, caregiving background, volunteer work, or community involvement…"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="whyFPWDs">
                  Why do you want to be a FPWDs Friend? *
                </label>
                <textarea
                  id="whyFPWDs"
                  name="whyFPWDs"
                  value={form.whyFPWDs}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What draws you to this kind of work? What do you hope to offer?"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={(e) => { e.target.style.borderColor = '#1B4332'; e.target.style.boxShadow = '0 0 0 3px rgba(27,67,50,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#DDD8D0'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
            </div>

            {/* Terms */}
            <div style={{
              backgroundColor: '#F0EDE8',
              borderRadius: '10px',
              padding: '1.25rem',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem',
            }}>
              <input
                id="agreeTerms"
                type="checkbox"
                name="agreeTerms"
                checked={form.agreeTerms}
                onChange={handleChange}
                required
                style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: '#1B4332', flexShrink: 0, cursor: 'pointer' }}
              />
              <label htmlFor="agreeTerms" style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.55, cursor: 'pointer' }}>
                I understand that FPWDs Friends are not therapists, counselors, or clinical providers. I agree to maintain appropriate boundaries and to complete orientation training before accepting sessions. I confirm that everything in this application is true.
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-accent btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

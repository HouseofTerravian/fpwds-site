import { useState, useMemo } from 'react';
import { friends, SPECIALTIES, COUNTRIES, LANGUAGES, type Friend } from '../data/friends';

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1px', fontSize: '0.85rem' }}>
      {'★'.repeat(full)}
      {half ? '½' : ''}
      {'☆'.repeat(empty)}
    </span>
  );
}

function Avatar({ initials, color, size = 64 }: { initials: string; color: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      backgroundColor: color, color: '#FFFFFF',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: size * 0.3,
      flexShrink: 0, letterSpacing: '0.03em',
    }}>
      {initials}
    </div>
  );
}

function FriendCard({ friend }: { friend: Friend }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #DDD8D0',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered
          ? '0 12px 32px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)'
          : '0 1px 3px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card Header */}
      <div style={{
        padding: '1.25rem 1.25rem 0',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
      }}>
        <Avatar initials={friend.initials} color={friend.avatarColor} size={60} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: '1rem', margin: 0, fontWeight: 700 }}>{friend.name}</h3>
            <span style={{ fontSize: '1rem' }}>{friend.countryFlag}</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: '0.15rem 0 0.4rem' }}>
            {friend.country}
          </p>
          {/* Rate Badge */}
          <span style={{
            display: 'inline-block',
            padding: '0.2rem 0.6rem',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            backgroundColor: friend.rateTier === 'community' ? 'rgba(27,67,50,0.1)' : 'rgba(255,107,53,0.12)',
            color: friend.rateTier === 'community' ? '#1B4332' : '#FF6B35',
          }}>
            {friend.rateLabel}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div style={{ padding: '0.75rem 1.25rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ color: '#F59E0B', fontSize: '0.9rem' }}>
          <StarRating rating={friend.rating} />
        </span>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1A1A1A' }}>{friend.rating.toFixed(1)}</span>
        <span style={{ fontSize: '0.78rem', color: '#6B7280' }}>({friend.reviewCount} reviews)</span>
      </div>

      {/* Specialties */}
      <div style={{ padding: '0.75rem 1.25rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {friend.specialties.map((s) => (
          <span key={s} style={{
            padding: '0.2rem 0.55rem',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 600,
            backgroundColor: '#F0EDE8',
            color: '#6B7280',
          }}>
            {s}
          </span>
        ))}
      </div>

      {/* Bio */}
      <div style={{ padding: '0.85rem 1.25rem 0', flex: 1 }}>
        <p style={{ fontSize: '0.865rem', color: '#6B7280', lineHeight: 1.65 }}>
          {friend.bio.length > 160 ? friend.bio.slice(0, 160) + '…' : friend.bio}
        </p>
      </div>

      {/* Meta */}
      <div style={{ padding: '0.85rem 1.25rem 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6B7280' }}>
            <span>🌐</span>
            <span>{friend.languages.join(' · ')}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6B7280' }}>
            <span>🕐</span>
            <span>{friend.availability}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '1.1rem 1.25rem 1.25rem' }}>
        <button
          style={{
            width: '100%',
            padding: '0.65rem 1rem',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '0.875rem',
            backgroundColor: hovered ? '#1B4332' : '#FAFAF8',
            color: hovered ? '#FFFFFF' : '#1B4332',
            border: '2px solid #1B4332',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, color 0.2s ease',
            fontFamily: 'inherit',
          }}
        >
          Book a Session
        </button>
      </div>
    </div>
  );
}

export default function FindAFriend() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [rate, setRate] = useState('');

  const filtered = useMemo(() => {
    return friends.filter((f) => {
      const searchLower = search.toLowerCase();
      const matchSearch = !search
        || f.name.toLowerCase().includes(searchLower)
        || f.bio.toLowerCase().includes(searchLower)
        || f.specialties.some(s => s.toLowerCase().includes(searchLower))
        || f.country.toLowerCase().includes(searchLower);
      const matchSpecialty = !specialty || f.specialties.includes(specialty);
      const matchCountry = !country || f.country === country;
      const matchLanguage = !language || f.languages.includes(language);
      const matchRate = !rate || f.rateTier === rate;
      return matchSearch && matchSpecialty && matchCountry && matchLanguage && matchRate;
    });
  }, [search, specialty, country, language, rate]);

  const hasFilters = search || specialty || country || language || rate;

  const clearFilters = () => {
    setSearch('');
    setSpecialty('');
    setCountry('');
    setLanguage('');
    setRate('');
  };

  return (
    <main style={{ backgroundColor: '#FAFAF8', minHeight: '60vh' }}>
      {/* Page Header */}
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
            Directory
          </span>
          <h1 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>Find a Friend</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '520px' }}>
            Browse our community of trained, empathetic companions. Filter by what matters to you and book when you're ready.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #DDD8D0', padding: '1.25rem 0' }}>
        <div className="container">
          {/* Search Bar */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                color: '#6B7280', fontSize: '1rem', pointerEvents: 'none',
              }}>
                🔍
              </span>
              <input
                type="text"
                className="form-input"
                placeholder="Search by name, specialty, or keyword…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ paddingLeft: '2.6rem' }}
              />
            </div>
          </div>

          {/* Filter Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '0.75rem',
            alignItems: 'end',
          }}>
            <div>
              <label className="form-label" style={{ marginBottom: '0.35rem', display: 'block', fontSize: '0.78rem' }}>Specialty</label>
              <select className="form-select" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                <option value="">All Specialties</option>
                {SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label" style={{ marginBottom: '0.35rem', display: 'block', fontSize: '0.78rem' }}>Country</label>
              <select className="form-select" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">All Countries</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label" style={{ marginBottom: '0.35rem', display: 'block', fontSize: '0.78rem' }}>Language</label>
              <select className="form-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="">All Languages</option>
                {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label" style={{ marginBottom: '0.35rem', display: 'block', fontSize: '0.78rem' }}>Rate</label>
              <select className="form-select" value={rate} onChange={(e) => setRate(e.target.value)}>
                <option value="">All Rates</option>
                <option value="community">Community · $15/hr</option>
                <option value="sustainer">Sustainer · $30/hr</option>
              </select>
            </div>
            {hasFilters && (
              <div style={{ paddingTop: '1.4rem' }}>
                <button
                  onClick={clearFilters}
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#6B7280',
                    backgroundColor: '#F0EDE8',
                    border: '1px solid #DDD8D0',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container" style={{ padding: '2rem 2rem' }}>
        {/* Results Count */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
            Showing <strong style={{ color: '#1A1A1A' }}>{filtered.length}</strong> friend{filtered.length !== 1 ? 's' : ''}
            {hasFilters ? ' matching your filters' : ''}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #DDD8D0',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ marginBottom: '0.5rem' }}>No friends found</h3>
            <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>Try adjusting your filters or search terms.</p>
            <button onClick={clearFilters} className="btn btn-primary">Clear all filters</button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }} className="friends-grid">
            {filtered.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .friends-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .friends-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FindAFriend from './pages/FindAFriend';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import BecomeAFriend from './pages/BecomeAFriend';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function NotFound() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem',
      textAlign: 'center',
      backgroundColor: '#FAFAF8',
      flex: 1,
    }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🌿</div>
      <h1 style={{ fontSize: '4rem', color: '#1B4332', marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ marginBottom: '0.75rem' }}>Page not found</h2>
      <p style={{ color: '#6B7280', marginBottom: '2rem', maxWidth: '380px' }}>
        We couldn't find that page, but there are plenty of real people here worth finding.
      </p>
      <a href="/" className="btn btn-accent btn-lg">Back to Home</a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<FindAFriend />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/become-a-friend" element={<BecomeAFriend />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

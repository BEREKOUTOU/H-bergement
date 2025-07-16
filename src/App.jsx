// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accommodations from './components/Accommodations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Apartments from './components/Apartments';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Accommodations />
              <Contact />
            </>
          } />
          <Route path="/booking" element={<Booking />} />
          <Route path="/apartments" element={<Apartments />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
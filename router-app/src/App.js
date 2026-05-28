import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/* Home Page */
function Home() {
  return (
    <div>
      <h1 style={{ color: '#1e3a5f' }}>Welcome to My Website</h1>

      <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
        This simple React Router application demonstrates navigation
        between pages without reloading the browser.
      </p>

      <p style={{ lineHeight: '1.8' }}>
        Explore the About and Contact pages using the navigation menu above.
      </p>
    </div>
  );
}

/* About Page */
function About() {
  return (
    <div>
      <h1 style={{ color: '#1e3a5f' }}>About Us</h1>

      <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
        We are learning React Router to create modern web applications
        with smooth and fast page navigation.
      </p>

      <p style={{ lineHeight: '1.8' }}>
        This project uses functional components, BrowserRouter,
        Routes, Route, and Link from React Router DOM.
      </p>
    </div>
  );
}

/* Contact Page */
function Contact() {
  return (
    <div>
      <h1 style={{ color: '#1e3a5f' }}>Contact Information</h1>

      <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
        Email: sample@email.com
      </p>

      <p style={{ lineHeight: '1.8' }}>
        Phone: +63 912 345 6789
      </p>

      <p style={{ lineHeight: '1.8' }}>
        Address: Lucena City, Quezon Province
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, #eef2f7, #d9e4f5)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* Navigation Bar */}
        <nav
          style={{
            backgroundColor: '#1e3a5f',
            padding: '18px',
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            About
          </Link>

          <Link
            to="/contact"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Content Container */}
        <div
          style={{
            width: '600px',
            margin: '60px auto',
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
            textAlign: 'center',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
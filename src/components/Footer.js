import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <p>&copy; Copyright {new Date().getFullYear()} Rohith Kadari</p>
    </footer>
  );
}

export default Footer;

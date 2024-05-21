import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-container'>
      <h2>
        <span>Bunlong Ly</span>
      </h2>
      <p>Copyright &copy; {currentYear} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

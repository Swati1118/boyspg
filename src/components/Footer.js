// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.contactInfo}>Contact Us: <a href="tel:+911234567890" style={styles.link}>+91 1234567890</a> | Email: <a href="mailto:info@boyspg.com" style={styles.link}>info@boyspg.com</a></p>
        <p style={styles.address}>Address: 123, Boys PG Street, Pune, Maharashtra, India</p>
        <p style={styles.copyright}>© 2024 Boys PG Accommodation. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#222',
    color: '#ddd',
    textAlign: 'center',
    padding: '20px 10px',
    marginTop: '40px',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contactInfo: {
    margin: '10px 0',
  },
  address: {
    margin: '10px 0',
  },
  link: {
    color: '#ff9800',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
  copyright: {
    margin: '20px 0 0',
    fontSize: '0.9rem',
  },
};

export default Footer;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/admin" style={styles.navLink}>Admin</Link></li>
        <li style={styles.navItem}><Link to="/amenities" style={styles.navLink}>Amenities</Link></li>
        <li style={styles.navItem}><Link to="/student" style={styles.navLink}>Student</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
        <li style={styles.navItem}><Link to="/signup" style={styles.navLink}>Signup</Link></li>
        <li style={styles.navItem}><Link to="/signin" style={styles.navLink}>Signin</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    background: '#1a1a1a',
    padding: '15px 30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 12px',
    transition: 'color 0.3s, background-color 0.3s',
    borderRadius: '4px',
  },
  navLinkHover: {
    color: '#ff9800',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
};

const NavLink = ({ to, children }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Link
      to={to}
      style={{
        ...styles.navLink,
        ...(hover ? styles.navLinkHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
};

export default Navbar;

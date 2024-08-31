// src/pages/AmenitiesPage.js
import React from 'react';

const AmenitiesPage = () => {
  const amenities = [
    { icon: '🛏️', text: 'Cot basis allocation (Bed)' },
    { icon: '🛏️', text: 'Separate Bed' },
    { icon: '🌬️', text: 'Fan' },
    { icon: '🌐', text: 'Wi-Fi' },
    { icon: '🧊', text: 'Refrigerator' },
    { icon: '🖼️', text: 'Gallery' },
    { icon: '🧺', text: 'Washing Machine' },
    { icon: '⚡', text: '24/7 Electricity Availability' },
    { icon: '📹', text: 'CCTV Coverage' },
    { icon: '🔒', text: 'Full Security' },
    { icon: '🚗', text: 'Parking' },
    { icon: '🏍️', text: 'Bike Parking' },
    { icon: '🧹', text: 'Cleaning Services' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Amenities</h1>
      <ul style={styles.list}>
        {amenities.map((amenity, index) => (
          <li key={index} style={styles.item}>
            <span style={styles.icon}>{amenity.icon}</span>
            <span style={styles.text}>{amenity.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',  // Increased padding for better spacing
    backgroundColor: '#f9f9f9', // Light gray background for contrast
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    marginTop: '60px',  // Adjusted margin to account for the fixed navbar
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontSize: '2rem', // Larger heading for emphasis
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: '900px', // Increased max-width for better readability
    margin: '0 auto',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px', // Increased padding for more spacing
    borderBottom: '1px solid #ddd',
    backgroundColor: '#fff', // White background for each item
    borderRadius: '8px', // Rounded corners for each item
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for a subtle 3D effect
    transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.3s', // Smooth transitions
    marginBottom: '10px', // Space between items
    cursor: 'pointer', // Indicate that items are interactive
  },
  itemHover: {
    backgroundColor: '#f1f1f1', // Hover background color
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Darker shadow on hover
    transform: 'translateY(-5px)', // Slight lift effect on hover
  },
  icon: {
    fontSize: '2rem',
    marginRight: '20px',
    color: '#ff9800', // Primary color for icons
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
  },
};

export default AmenitiesPage;

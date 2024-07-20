import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} Isuru Bandara | Mobile & web Developer. All rights reserved.</p>
        {/* <ul style={styles.socialLinks}>
          <li style={styles.socialLinkItem}><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a></li>
          <li style={styles.socialLinkItem}><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a></li>
          <li style={styles.socialLinkItem}><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a></li>
          <li style={styles.socialLinkItem}><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a></li>
        </ul> */}
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px 15px',
  },
  socialLinks: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  socialLinkItem: {
    display: 'inline',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  linkHover: {
    textDecoration: 'underline',
  }
};

export default Footer;

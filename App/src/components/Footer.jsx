import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium tincidunt felis, vel sagittis est. Aenean ultricies ipsum et sapien cursus, ut auctor ligula bibendum.</p>
          </div>
          <div className={styles.col}>
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className={styles.col}>
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media:</p>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr className={styles.divider} />
        <p className={styles.copy}>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

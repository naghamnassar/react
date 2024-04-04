import React from 'react';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for cannot be found.</p>
      <p>Please check the URL or navigate back to the homepage.</p>
    </div>
  );
}

export default NotFound;

// components/Header.js

import React from 'react';
import styles from './Header.module.css';

function Header({ resetChat }) {
  return (
    <div className={styles.chatHeader}>
      <img src="https://uploads-ssl.webflow.com/646064abf2ae787ad9c35019/6469d4c7f49bf4234c6a5a7e_AIfred.svg" alt="AIfred" style={{ height: '44px', marginTop: '5px'  }} />
      <button className={styles.resetButton} onClick={resetChat}></button>
    </div>
  );
}

export default Header;

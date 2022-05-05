import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>MovieBase</div>
            <input className={styles.search} placeholder="Search movies" />
        </div>
    );
};

export default Header;

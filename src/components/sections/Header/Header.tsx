import React from 'react';
import Container from '../../layout/Container';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Container>
                <div className={styles.header}>
                    <div className={styles.title}>MovieBase</div>
                    <input className={styles.search} placeholder="Search movies" />
                </div>
            </Container>
        </div>
    );
};

export default Header;

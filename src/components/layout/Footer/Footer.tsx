import React from 'react';
import Container from '../Container';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <Container>
                <div className={styles.footer}>Footer</div>
            </Container>
        </div>
    );
};

export default Footer;

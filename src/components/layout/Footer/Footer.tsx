import React from 'react';
import Container from '../Container';
import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';
import { SiThemoviedatabase } from 'react-icons/si';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <Container>
                <div className={styles.footer}>
                    <span>By: Michael Farquhar</span>
                    <div className={styles.footer__icons}>
                        <a
                            href="https://github.com/MichaelFarquhar/movie-base"
                            target="blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://developers.themoviedb.org/3"
                            target="blank"
                            rel="noopener noreferrer"
                        >
                            <SiThemoviedatabase />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;

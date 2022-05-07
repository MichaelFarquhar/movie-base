import React from 'react';
import Container from '../Container';
import styles from './Body.module.css';

const Body = () => {
    return (
        <div className={styles.body}>
            <Container>
                <h1>Body</h1>
            </Container>
        </div>
    );
};

export default Body;

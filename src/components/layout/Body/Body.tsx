import Trending from '../../sections/Trending';
import Container from '../Container';
import styles from './Body.module.css';

const Body = () => {
    return (
        <div className={styles.body}>
            <Container>
                <Trending />
            </Container>
        </div>
    );
};

export default Body;

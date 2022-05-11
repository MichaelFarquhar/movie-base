import { useContext } from 'react';
import { MovieContext } from '../../../context/MovieContext';
import styles from './Trending.module.css';

interface MovieItemType {
    media_type: string;
    title: string;
    poster_path: string;
}

const Trending = () => {
    const posterPath = 'https://image.tmdb.org/t/p/original/';
    const trending: any = useContext(MovieContext)?.trending;
    console.log(trending);

    return (
        <div>
            <h3>Trending Movies</h3>
            <div className={styles.trending}>
                {trending.results?.slice(0, 15).map((item: MovieItemType) => {
                    return (
                        <img
                            src={`${posterPath}${item.poster_path}`}
                            width={190}
                            height={280}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Trending;

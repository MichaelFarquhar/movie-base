import React, { useState, useEffect } from 'react';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';

import { MovieContext } from './context/MovieContext';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
    const [data, setData] = useState({
        trending: {},
    });

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((res) =>
                setData({
                    trending: res,
                })
            )
            .catch((error) => console.log(error));
    }, []);

    console.log(data);

    return (
        <div className="app">
            <Header />
            <MovieContext.Provider value={data}>
                <Body />
            </MovieContext.Provider>
            <Footer />
        </div>
    );
}

export default App;

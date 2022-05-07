import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/sections/Header';

function App() {
    return (
        <div className="app">
            <Header />
            <div>
                {Array(200)
                    .fill(1)
                    .map((_, i) => (
                        <p key={i}>{i}</p>
                    ))}
            </div>
            <div
                style={{
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'green',
                }}
            >
                footer
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/layout/Container';
import Header from './components/sections/Header';

function App() {
    return (
        <div className="app">
            <Container>
                <Header />
            </Container>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;

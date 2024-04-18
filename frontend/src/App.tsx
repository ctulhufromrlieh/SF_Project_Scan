import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="main">
                <AppRouter/>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import { useActions } from './hooks/useActions';

function App() {
    const {loginUserByToken} = useActions();

    useEffect(() => {
        const accessToken = localStorage.getItem("account_accessToken");
        const expire = localStorage.getItem("account_expire");
        console.log(accessToken, expire);

        if (accessToken && expire) {
            loginUserByToken(accessToken, expire);
        }
    }, []);


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

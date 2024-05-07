import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import { useActions } from './hooks/useActions';
import { loginUserReset } from './store/action-creators/account';
import { isValidAuth } from './utils/auth';

function App() {
    const {loginUserByToken, loginUserReset} = useActions();

    useEffect(() => {
        // const accessToken = localStorage.getItem("account_accessToken");
        // const expire = localStorage.getItem("account_expire");
        // console.log(accessToken, expire);

        // if (accessToken && expire) {
        //     loginUserByToken(accessToken, expire);
        // } else {
        //     loginUserReset();
        // }
        if (isValidAuth()) {
            const accessToken = localStorage.getItem("account_accessToken");
            const expire = localStorage.getItem("account_expire");
            if (accessToken && expire) {
                loginUserByToken(accessToken, expire);
            }
        } else {
            loginUserReset();
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

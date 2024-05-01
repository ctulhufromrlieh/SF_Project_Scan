import React, { useEffect, useState } from "react";
import classes from "./PageLogin.module.scss";

import imageDesktop from "../../../img/pages/login/img-desktop.module.svg";
import imageMobile from "../../../img/pages/login/img-mobile.module.svg";
import imageLock from "../../../img/pages/login/img-frm-ico.module.svg";

import imageSocialBtnFacebook from "../../../img/pages/login/btn-facebook.module.svg";
import imageSocialBtnGoogle from "../../../img/pages/login/btn-google.module.svg";
import imageSocialBtnYandex from "../../../img/pages/login/btn-yandex.module.svg";

import Switcher, { SwitcherElem } from "../../UI/Switcher/Switcher";
import MyLabeledInput, { LabelType } from "../../UI/MyLabeledInput/MyLabeledInput";
import MyButton, { ButtonColorScheme, ButtonSizeType } from "../../UI/MyButton/MyButton";
import { Link, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Loader from "../../UI/Loader/Loader";
import { loginUserReset } from "../../../store/action-creators/account";

const PageLogin = () => {
    const {isLogined, accessToken, expire, loading, error} = useTypedSelector(state => state.account);
    const navigate = useNavigate();

    // const navigate = useNavigate();
    // if (isLogined) {
    //     navigate("/");    
    // }

    const [pageLoginSelectedIndex, setPageLoginSelectedIndex] = useState(0);
    const [username, setUsername] = useState("");
    // const [isUsernameError, setIsUsernameError] = useState(false);
    // const [isUsernameError, setIsUsernameError] = useState(true);
    const [password, setPassword] = useState("");
    // const [isPasswordError, setIsPasswordError] = useState(false);
    // const [isPasswordError, setIsPasswordError] = useState(true);
    // const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    const pageLoginSwitcherElems: SwitcherElem[] = [
        {id: 1, caption: "Войти"},
        {id: 2, caption: "Зарегистрироваться"},
    ];

    const isPrimaryCorrectData = (username: string, password: string) => {
        return (username.length > 0) && (password.length > 0);
    }

    const {loginUser, loginUserReset} = useActions();
    // useEffect(() => {
    //     loginUser();
    // }, []);

    const submit = () => {
        loginUser(username, password, navigate);
    }

    let isUsernameError = false;
    let isPasswordError = false;
    if (error) {
        isUsernameError = true;
        isPasswordError = true;
    }
    
    const changeErrorState = (value: boolean) => {
        if (!value) {
            loginUserReset();
            // console.log("loginUserReset");
        }
    }

    // console.log('PageLogin: render', error);

    const isSubmitEnabled = isPrimaryCorrectData(username, password) && !loading && !(error);
    
    // if (loading) {
    //     return <h1>Идёт загрузка...</h1>;
    // }
    // if (error) {
    //     return <h1>{error}</h1>;
    // }

    const usernameChangeHandler = (value: string) => {
        setUsername(value);
        // setIsSubmitEnabled(true);
        // setIsSubmitEnabled(isPrimaryCorrectData(value, password));
    }
    const passwordChangeHandler = (value: string) => {
        setPassword(value);
        // setIsSubmitEnabled(true);
        // setIsSubmitEnabled(isPrimaryCorrectData(username, value));
    }

    return (
        <div>
            <div className={classes.page}>
                <div className={classes.left_part}>
                    <h1 className={classes.heading_main}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                    <div className={classes.image_desktop_container}>
                        <div className={classes.left_part_wrapper_left}/>
                        <img src={imageDesktop} alt="Login page image for desktop"/>
                        <div className={classes.left_part_wrapper_right}/>
                    </div>
                </div>
                <div className={classes.right_part}>
                    <img className={classes.image_lock} src={imageLock} alt="Image of lock for authorization form"/>
                    <div className={classes.login_form}>
                        <Switcher 
                            elems={pageLoginSwitcherElems} 
                            selectedIndex={pageLoginSelectedIndex} 
                            setSelectedIndex={selectedIndex => setPageLoginSelectedIndex(selectedIndex)}
                        />
                        <MyLabeledInput 
                            id="login-form__username"
                            type="text"
                            labelCaption="Логин или номер телефона:" 
                            labelType={LabelType.LIGHT}
                            errorCaption="Введите корректные данные" 
                            value={username}
                            setValue={(value) => usernameChangeHandler(value)} 
                            isError={isUsernameError}
                            setIsError={(value) => changeErrorState(value)}
                            addContainerClassNames={[classes.username_input]}
                        />
                        <MyLabeledInput 
                            id="login-form__password"
                            type="password"
                            labelCaption="Пароль:" 
                            labelType={LabelType.LIGHT}
                            errorCaption="Неправильный пароль" 
                            value={password}
                            setValue={(value) => passwordChangeHandler(value)} 
                            isError={isPasswordError}
                            setIsError={(value) => changeErrorState(value)}
                            addContainerClassNames={[classes.password_input]}
                        />
                        <MyButton 
                            sizeType={ButtonSizeType.LARGE}
                            colorScheme={ButtonColorScheme.BLUE_WHITE}
                            addClassNames={[classes.submit_btn]}
                            disabled={!isSubmitEnabled}
                            onClick={() => submit()}
                        >
                            Войти{loading && <span style={{position: "absolute"}}><Loader/></span>}
                        </MyButton>
                        <div className={classes.restore_psw_container}>
                            <Link className={classes.restore_psw} to="/restore-password">Восстановить пароль</Link>
                        </div>
                        <div className={classes.enter_through_container}>
                            <h3>Войти через:</h3>
                            <div className={classes.social_buttons}>
                                <button className={classes.social_button}>
                                    <Link to="/login-google">
                                        <img src={imageSocialBtnGoogle} alt="Enter throug Google account"/>
                                    </Link>
                                </button>
                                <button className={classes.social_button}>
                                    <Link to="/login-facebook">
                                        <img src={imageSocialBtnFacebook} alt="Enter throug Facebook account"/>
                                    </Link>
                                </button>
                                <button className={classes.social_button}>
                                    <Link to="/login-yandex">
                                        <img src={imageSocialBtnYandex} alt="Enter throug Yandex account"/>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.image_mobile_container}>
                    <img src={imageMobile} alt="Login page image for mobile"/>
                </div>
            </div>
        </div>
    );
}

export default PageLogin;
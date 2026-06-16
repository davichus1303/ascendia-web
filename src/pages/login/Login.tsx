import './Login.css';
import logoAscendia from '../../assets/logoAscendia.png';
import { AuthService } from '../../services/AuthService';
import { useState, useEffect } from 'react';
import es from '../../i18n/es.json';
import en from '../../i18n/en.json';
import { GENERAL_CONSTANTS } from '../../constants/General.constants';
import { HEADER_CONSTANTS } from '../../constants/header.constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface LoginProps {
    language: string;
}

export function Login({ language }: LoginProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dictionary = language === HEADER_CONSTANTS.ES_LOCALE ? es : en;

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.successMessage) {
            toast.success(location.state.successMessage);
        }
    }, [location.state]);
    
    const redirectToRegister = () => {
        navigate('/user/create');
    };

    /**
     * @description Handle login, save token in localStorage
     * @returns {Promise<void>}
     */
    const handleLogin = async () => {
        try {
          const response = await AuthService.login(
              email,
              password
          );

            localStorage.setItem(
              GENERAL_CONSTANTS.TOKEN_KEY,
              response.accessToken
            );
            toast.success(dictionary.login.success);
        } catch (error) {
            toast.error(dictionary.login.failed);
        }
    };

    return (
        <div className="login-container">
            <div className="login-brand">
                <img
                    src={logoAscendia}
                    alt={GENERAL_CONSTANTS.APP_NAME}
                    className="logo"
                />

                <h1 className="login-brand-title">
                    {GENERAL_CONSTANTS.APP_NAME}
                </h1>

                <p>
                    <span>{dictionary.login.learn}. </span>
                    <span className="login-brand-green">
                        {dictionary.login.grow}.
                    </span>
                    <span> {dictionary.login.advance}.</span>
                </p>
            </div>

            <div className="login-form-container">

                <form className="login-form">
                    <h2>{dictionary.login.title}</h2>

                    <input
                        type="email"
                        placeholder={dictionary.login.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>

                    <input
                        type="password"
                        placeholder={dictionary.login.password}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>

                    <button
                        type="button"
                        onClick={handleLogin}>
                        {dictionary.login.submit}
                    </button>

                    <button
                        type="button"
                        className="secondary-button"
                        onClick={redirectToRegister}>
                        {dictionary.login.createAccount}
                    </button>

                </form>
            </div>
        </div>
    );
}
import './Login.css';
import logoAscendia from '../../assets/logoAscendia.png';
import { AuthService } from '../../services/AuthService';
import { useState } from 'react';
import es from '../../i18n/es.json';
import en from '../../i18n/en.json';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [language, setLanguage] = useState('es');
    const dictionary = language === 'es' ? es : en;

    /**
     * @description Handle login button click
     * @returns {Promise<void>}
     */
    const handleLogin = async () => {
        const response = await AuthService.login(email, password);
        localStorage.setItem('token', response.accessToken);
    };

    return (
        <div className="login-container">
            <div className="login-brand">
                <img
                    src={logoAscendia}
                    alt="Ascendia"
                    className="logo"
                />

                <h1 className="login-brand-title">ASCENDIA</h1>

                <p>
                    <span>{dictionary.login.learn}. </span>
                    <span className="login-brand-green">{dictionary.login.grow}.</span>
                    <span> {dictionary.login.advance}.</span>
                </p>
            </div>

            <div className="login-form-container">
                <div className="language-selector">
                    <span
                        onClick={() => setLanguage('es')}
                        className={language === 'es' ? 'active' : ''}
                    >
                        🇲🇽
                    </span>

                    <span
                        onClick={() => setLanguage('en')}
                        className={language === 'en' ? 'active' : ''}
                    >
                        🇺🇸
                    </span>
                </div>
                <form className="login-form">
                    <h2>{dictionary.login.title}</h2>

                    <input
                        type="email"
                        placeholder={dictionary.login.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder={dictionary.login.password}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="button" onClick={handleLogin}>
                        {dictionary.login.submit}
                    </button>

                    <button
                        type="button"
                        className="secondary-button"
                    >
                        {dictionary.login.createAccount}
                    </button>
                </form>
            </div>
        </div>
    );
}
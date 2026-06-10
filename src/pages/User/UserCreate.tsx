import './userCreate.css';
import { useState } from 'react';
import Header from '../../components/header/Header';
import logoAscendia from '../../assets/logoAscendia.png';
import { HEADER_CONSTANTS } from '../../constants/header.constants';
import { GENERAL_CONSTANTS } from '../../constants/General.constants';
import es from '../../i18n/es.json';
import en from '../../i18n/en.json';
import { UserCreateForm } from '../../components/UserCreate/UserCreateForm';
import { useUserCreate } from '../../hooks/useUserCreate';

function UserCreate() {

    /**
     * @description Language state for the application
     */
    const [language, setLanguage] = useState(
        localStorage.getItem('language') || HEADER_CONSTANTS.ES_LOCALE
    );

    const dictionary =
        language === HEADER_CONSTANTS.ES_LOCALE
            ? es
            : en;
            
    const {
        user,
        setUser,
    } = useUserCreate();

    console.log(user);
    
    return (
        <div className="user-create-container">

            <div className="user-create-brand">

                <div className="user-create-brand-header">
                    <img
                        src={logoAscendia}
                        alt={GENERAL_CONSTANTS.APP_NAME}
                        className="logo"
                    />

                    <p className="app-name">
                        {GENERAL_CONSTANTS.APP_NAME}
                    </p>
                </div>

                <p className="user-create-brand-text">
                    <span>{dictionary.login.learn}. </span>

                    <span className="login-brand-green">
                        {dictionary.login.grow}.
                    </span>

                    <span>
                        {GENERAL_CONSTANTS.SPACE}
                        {dictionary.login.advance}.
                    </span>
                </p>

            </div>

            <div className="user-create-content">

                <Header
                    language={language}
                    setLanguage={setLanguage}
                />

                <div className="user-create-form-container">

                    <h1 className="user-create-title">
                        {dictionary.user.create.title}
                    </h1>

                    <UserCreateForm
                        dictionary={dictionary}
                        user={user}
                        setUser={setUser}
                    />

                </div>

            </div>

        </div>
    );
}

export default UserCreate;
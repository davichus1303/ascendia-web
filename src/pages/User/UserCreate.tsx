import './userCreate.css';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import logoAscendia from '../../assets/logoAscendia.png';
import { HEADER_CONSTANTS } from '../../constants/header.constants';
import { GENERAL_CONSTANTS } from '../../constants/General.constants';
import es from '../../i18n/es.json';
import en from '../../i18n/en.json';
import { UserCreateForm } from '../../components/UserCreate/UserCreateForm';
import { useUserCreate } from '../../hooks/useUserCreate';
import { CompanyService } from '../../services/Company.service';
import type { Company } from '../../interface/Company.interface';
import { RolesService } from '../../services/Roles.service';
import type { Role } from '../../interface/Role.interface';
import { UserService } from '../../services/UserService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

/**
 * @description User create page
 */
function UserCreate() {

    /**
     * @description Language state for the application
     */
    const [language, setLanguage] = useState(
        localStorage.getItem('language') || HEADER_CONSTANTS.ES_LOCALE
    );
    const [companies, setCompanies] = useState<Company[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);

    const dictionary =
        language === HEADER_CONSTANTS.ES_LOCALE
            ? es
            : en;

    
    /**
     * @description Load companies for the list selector
     */
    const loadCompanies = async () => {
        const response = await CompanyService.getAllSimpleActive();
        setCompanies(response);
    };    
    useEffect(() => {
        loadCompanies();
    }, []);

    /**
     * @description Load roles for the list selector
     */
    const loadRoles = async () => {
        const response = await RolesService.getAllSimpleActiveRoles();
        setRoles(response);
    };
    useEffect(() => {
        loadRoles();
    }, []);
    
    /**
     * @description Create user
     */
    const onCreateUser = async () => {
        const response = await UserService.createUser(user);
        if (response.length > 0) {
            toast.success(dictionary.user.successMessages.userCreatedSuccessfully);
            cleanForm();
            navigate(GENERAL_CONSTANTS.LOCAL_URLS.HOME, {
                state: {
                    successMessage: dictionary.user.successMessages.userCreatedSuccessfully
                }
            });
        } else {
            toast.error(dictionary.user.errors.creatingError);
        }
    };

    /**
     * @description Clean form
     */
    const cleanForm = () => {
        setUser({
            name: '',
            lastName: '',
            surName: '',
            email: '',
            password: '',
            passwordRepeat: '',
            companyOId: '',
            roleOId: '',
        });
    };
    const {
        user,
        setUser,
    } = useUserCreate();
    const navigate = useNavigate();
    
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
                        companies={companies}
                        roles={roles}
                        onCreateUser={onCreateUser}
                    />

                </div>

            </div>

        </div>
    );
}

export default UserCreate;
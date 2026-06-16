import type { UserRequest } from "../../interface/user.interface";
import type { Company } from "../../interface/Company.interface";
import type { Role } from "../../interface/Role.interface";
import { useState } from "react";
import { userValidator } from "../../validators/user.validator";
import { generalRegex } from "../../utils/generalRegex";

interface UserCreateFormProps {
    dictionary: any;
    user: UserRequest;
    setUser: React.Dispatch<React.SetStateAction<UserRequest>>;
    companies: Company[];
    roles: Role[];
    onCreateUser: () => void;
}

export function UserCreateForm({
    dictionary,
    user,
    setUser,
    companies,
    roles,
    onCreateUser
}: UserCreateFormProps) {
    const isValid = userValidator.validateUser(user);
    const emailRegex = generalRegex.email;
    const passwordRegex = generalRegex.password;

    /**
     * @description Gets the password error message
     * @returns {string} The password error message
     */
    const passwordError = () => {
        const { password } = user;
        const isPasswordMissing = !password;
        const isPasswordInvalid = password && !passwordRegex.test(password);

        if (!touched.password) {
            return "";
        }

        if (isPasswordMissing) {
            return dictionary.user.errors.passwordRequired;
        }

        if (isPasswordInvalid) {
            return dictionary.user.errors.passwordInvalid;
        }
        return "";
    };
    /**
     * @description Checks if the passwords are equal
     * @returns {boolean} True if the passwords are equal, false otherwise
     */
    const isPasswordEqual = () => {
        return user.password && user.passwordRepeat && user.password !== user.passwordRepeat;
    };

    /**
     * @description Gets the email error message
     * @returns {string} The email error message
     */
    const getEmailError = () => {
        const { email } = user;
        const isEmailMissing = !email;
        const isEmailInvalid = email && !emailRegex.test(email);

        if (!touched.email) {
            return "";
        }

        if (isEmailMissing) {
            return dictionary.user.errors.emailRequired;
        }

        if (isEmailInvalid) {
            return dictionary.user.errors.emailInvalid;
        }

        return "";
    };
    const [touched, setTouched] = useState({
        name: false,
        lastName: false,
        email: false,
        password: false,
        passwordRepeat: false,
        companyOid: false,
        roleOid: false
    });
    return (
        <form className="user-create-form">

            <div className="form-row">

                <div className="form-field">
                    <label htmlFor="name">
                        {dictionary.user.create.firstName}
                    </label>

                    <input
                        type="text"
                        id="name"
                        placeholder={dictionary.user.create.firstName}
                        value={user.name}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                name: e.target.value
                            })
                        }
                        onBlur={() => setTouched({ ...touched, name: true })}
                        className={touched.name && !user.name ? "error-input" : ""}
                    />
                    {touched.name && !user.name && (
                        <span className="error">
                            {dictionary.user.errors.firstNameRequired}
                        </span>
                    )}
                </div>

                <div className="form-field">
                    <label htmlFor="lastName">
                        {dictionary.user.create.lastName}
                    </label>

                    <input
                        type="text"
                        id="lastName"
                        placeholder={dictionary.user.create.lastName}
                        value={user.lastName}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                lastName: e.target.value
                            })
                        }
                        onBlur={() => setTouched({ ...touched, lastName: true })}
                        className={touched.lastName && !user.lastName ? "error-input" : ""}
                    />
                    {touched.lastName && !user.lastName && (
                        <span className="error">
                            {dictionary.user.errors.lastNameRequired}
                        </span>
                    )}
                </div>

            </div>

            <div className="form-row">

                <div className="form-field">
                    <label htmlFor="surName">
                        {dictionary.user.create.surName}
                    </label>

                    <input
                        type="text"
                        id="surName"
                        placeholder={dictionary.user.create.surName}
                        value={user.surName}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                surName: e.target.value
                            })
                        }
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">
                        {dictionary.user.create.email}
                    </label>

                    <input
                        type="email"
                        id="email"
                        placeholder={dictionary.user.create.email}
                        value={user.email}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }
                        onBlur={() => setTouched({ ...touched, email: true })}
                        className={getEmailError() ? "error-input" : ""}
                    />
                    {getEmailError() && (
                        <span className="error">
                            {getEmailError()}
                        </span>
                    )}
                </div>

            </div>

            <div className="form-row">

                <div className="form-field">
                    <label htmlFor="password">
                        {dictionary.user.create.password}
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder={dictionary.user.create.password}
                        value={user.password}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }
                        onBlur={() => setTouched({ ...touched, password: true })}
                        className={passwordError() ? "error-input" : ""}
                    />
                    {passwordError() && (
                        <span className="error">
                            {passwordError()}
                        </span>
                    )}
                </div>

                <div className="form-field">
                    <label htmlFor="passwordRepeat">
                        {dictionary.user.create.passwordRepeat}
                    </label>

                    <input
                        type="password"
                        id="passwordRepeat"
                        placeholder={dictionary.user.create.passwordRepeat}
                        value={user.passwordRepeat}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                passwordRepeat: e.target.value
                            })
                        }
                        onBlur={() => setTouched({ ...touched, passwordRepeat: true })}
                        className={isPasswordEqual() ? "error-input" : ""}
                    />
                    {isPasswordEqual() && (
                        <span className="error">
                            {dictionary.user.errors.passwordMismatch}
                        </span>
                    )}
                </div>

            </div>

            <div className="form-row">

                <div className="form-field">
                    <label htmlFor="company">
                        {dictionary.user.create.company}
                    </label>

                    <select
                        id="company"
                        value={user.companyOId}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                companyOId: e.target.value
                            })
                        }
                        onBlur={() => setTouched({ ...touched, companyOid: true })}
                        className={touched.companyOid && !user.companyOId ? "error-input" : ""}
                    >
                        <option value="">
                            {dictionary.user.create.selectCompany}
                        </option>
                        {companies.map((company) => (
                            <option key={company._id} value={company._id}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                    {touched.companyOid && !user.companyOId && (
                        <span className="error">
                            {dictionary.user.errors.companyRequired}
                        </span>
                    )}
                </div>

                <div className="form-field">
                    <label htmlFor="role">
                        {dictionary.user.create.role}
                    </label>

                    <select
                        id="role"
                        value={user.roleOId}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                roleOId: e.target.value
                            })
                        }
                        onBlur={() => setTouched({ ...touched, roleOid: true })}
                        className={touched.roleOid && !user.roleOId ? "error-input" : ""}
                    >
                        <option value="">
                            {dictionary.user.create.selectRole}
                        </option>
                        {roles.map((role) => (
                            <option key={role._id} value={role._id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    {touched.roleOid && !user.roleOId && (
                        <span className="error">
                            {dictionary.user.errors.roleRequired}
                        </span>
                    )}
                </div>

            </div>
            <div className="form-actions">
                <button
                    type="button"
                    className={isValid ? "send-button" : "send-button disabled"}
                    onClick={onCreateUser}
                    disabled={!isValid}>
                    {dictionary.user.create.createButton}
                </button>

            </div>
        </form>
    );
}
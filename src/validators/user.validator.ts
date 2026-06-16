import type { UserRequest } from "../interface/user.interface";
import { generalRegex } from "../utils/generalRegex";

export const userValidator = {
    /**
     * @description Validates a user object
     * @param {UserRequest} user The user object to validate
     * @returns {boolean} True if the user is valid, false otherwise
     */
    validateUser: (user: UserRequest) => {
        const { name, lastName, email, password, companyOId: companyOid, roleOId, passwordRepeat } = user;
        const isNameValid = name && name.trim() !== "";
        const isLastNameValid = lastName && lastName.trim() !== "";
        const isEmailValid = email && email.trim() !== "" && generalRegex.email.test(email);
        const isPasswordValid = password && password.trim() !== "" && generalRegex.password.test(password);
        const isPasswordEqual = password === passwordRepeat;
        const isCompanyOidValid = companyOid && companyOid.trim() !== "";
        const isRoleOidValid = roleOId && roleOId.trim() !== "";

        return (
            isNameValid &&
            isLastNameValid &&
            isEmailValid &&
            isPasswordValid &&
            isPasswordEqual &&
            isCompanyOidValid &&
            isRoleOidValid
        );
    }
}
        

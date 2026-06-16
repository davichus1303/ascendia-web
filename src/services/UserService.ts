import axios from "axios";
import { GENERAL_CONSTANTS } from "../constants/General.constants";
import type { UserRequest } from "../interface/user.interface";

const API_URL = import.meta.env.VITE_URL_API;

/**
 * @description Service for users
 */
export const UserService = {
    /**
     * @description Create a new user
     * @param {UserRequest} user - User data
     * @returns {Promise<any[]>} - Response
     */
    createUser: async (user: UserRequest): Promise<any[]> => {
        try {
            user.passwordRepeat = undefined;
            const endpoint = `${API_URL}${GENERAL_CONSTANTS.ENDPOINT.USERS.BASE}`;
            const response = await axios.post(endpoint, user);

            if (!response || response.data.length === 0) {
                return [];
            }

            return response.data;
        } catch (error) {
            throw error;
        }
    },

    /**
     * @description Validate if user password and passwordRepeat are equals
     * @param {UserRequest} user - User data
     * @returns {boolean} - True if password and passwordRepeat are equals, false otherwise
     */
    validatePassword: (user: UserRequest): boolean => {
        return user.password === user.passwordRepeat;
    },

};

import axios from "axios";
import { GENERAL_CONSTANTS } from "../constants/General.constants";

const API_URL = import.meta.env.VITE_URL_API;

/**
 * @description Service for roles
 */
export const RolesService = {
    /**
     * @description Get all roles
     * @returns {Promise<any>} - Response
     */
    getAllSimpleActiveRoles: async () => {
        const endpoint =
            `${API_URL}${GENERAL_CONSTANTS.ENDPOINT.ROLES.BASE}${GENERAL_CONSTANTS.ENDPOINT.ROLES.GET_ALL_SIMPLE_ACTIVE}`;
        const response = await axios.get(endpoint);
        return response.data;
    },
};

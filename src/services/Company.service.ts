import axios from "axios";
import { GENERAL_CONSTANTS } from "../constants/General.constants";

const API_URL = import.meta.env.VITE_URL_API;

/**
 * @description Service for company
 */
export const CompanyService = {
    /**
     * @description Get all companies
     * @returns {Promise<any>} - Response
     */
    getAllSimpleActive: async () => {
        const endpoint =
            `${API_URL}${GENERAL_CONSTANTS.ENDPOINT.COMPANY.BASE}${GENERAL_CONSTANTS.ENDPOINT.COMPANY.GET_ALL_SIMPLE_ACTIVE}`;
        const response = await axios.get(endpoint);
        return response.data;
    },
};

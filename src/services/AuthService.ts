import axios from "axios";

const API_URL = import.meta.env.VITE_URL_API;

export const AuthService = {
    login: async (email: string, password: string) => {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password,
        });
        return response.data;
    },
};

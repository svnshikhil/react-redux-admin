import axios from '../_client/axios';

export const authServices = {
    login: async (params) => {
        try {
            const response = await axios.post(`/auth/login`, params);
            return response.data.data;
        } catch (e) {
            throw e
        }
    },
    logout: async () => {
        // remove user from local storage to log user out
        return new Promise(async (resolve, reject) => {
            try {
                localStorage.removeItem('user');
                resolve()
            } catch (error) {
                reject(error)
            }
        });
    }
};
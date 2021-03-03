import axios from 'axios';
import { authConstants } from '../_constants';
import { store, history } from '../_helpers';
import { notification } from 'antd';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

axiosInstance.interceptors.request.use(async function (config) {
  const user = localStorage.getItem('user');
  if (user) {
    config.headers.Authorization = `JWT ${JSON.parse(user).token}`;
  }
  return config;
});
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    let message = error.response?.data?.msg || 'Something went wrong...'
    notification.error({
      message
    });
    if (401 === error.response?.status) {
      if (history.location.pathname !== '/login') {
        localStorage.removeItem('user');
        store.dispatch({
          type: authConstants.LOGOUT,
        });
        history.push('/login')
      }
    } else {
      history.push('/page500')
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

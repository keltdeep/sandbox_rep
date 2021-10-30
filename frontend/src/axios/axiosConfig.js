import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.APP_AXIOS_URL,
  withCredentials: true
});

export default axiosInstance;

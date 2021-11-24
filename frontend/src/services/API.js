import axios from 'axios';

export default () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
  });

  const token = localStorage.getItem('token');
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 400) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        location.reload();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

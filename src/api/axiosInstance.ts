import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mymuses.site', // ENDPOINTS.BASE_URL은 없고 상수 BASE_URL 활용
});

// 요청 인터셉터로 토큰 자동 삽입
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

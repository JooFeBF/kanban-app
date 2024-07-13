import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://kanban-con-typescript.onrender.com/api',  
  timeout: 5000,
  headers:
  {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
});

export default axiosInstance;

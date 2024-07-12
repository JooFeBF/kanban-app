import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://kanban-con-typescript.onrender.com/api',  
  timeout: 5000,
  headers:
  {
    'Authorization': `Bearer ${localStorage.getItem('token')} `,
    'Content-Type': 'application/json',
    'accept': 'application/json',
  }
});
export default axiosInstance;
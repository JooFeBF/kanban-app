import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://kanban-con-typescript.onrender.com/api',  
  timeout: 5000,
  headers:
  {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoicHJ1ZWJhQGEuY29tIiwiaWF0IjoxNzIwNzA2NDY3LCJleHAiOjE3MjA3MzE2Njd9.oWuVBeXCx4A5czEtyFd0XLYrz3GDhFffkHoN6vagXQo`,
    'Content-Type': 'application/json',
    'accept': 'application/json',
  }
});
export default axiosInstance;
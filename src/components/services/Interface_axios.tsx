import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://kanban-con-typescript.onrender.com/api',  
  timeout: 5000,
  headers:
  {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDAsImVtYWlsIjoiUmFtaXJvQUBnbWFpbC5jbyIsImlhdCI6MTcyMDc0NTYxNiwiZXhwIjoxNzIwNzcwODE2fQ.IZa0Df9Le5v20AJauf00xD8YVXUoRZzNjnYO2ixLjaI`,
    'Content-Type': 'application/json',
    'accept': 'application/json',
  }
});
export default axiosInstance;
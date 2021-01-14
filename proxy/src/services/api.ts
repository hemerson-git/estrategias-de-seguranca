import axios from 'axios';

const api = axios.create({
  baseURL: 'https://carloslevir.free.beeceptor.com'
});

export default api;

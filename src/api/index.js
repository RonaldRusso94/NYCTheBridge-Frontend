import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nycthebridge.herokuapp.com/api',
  headers: {
    Accept: 'application/json',
  },
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fatecjobs.herokuapp.com',
});

export { api };

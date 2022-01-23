import axios from 'axios';
import { BASE_URL } from './api-constants'

const apiConfig = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});


export default apiConfig;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
  // baseURL: 'http://54.190.5.246:5000'
  // baseURL: 'https://backend-obpms.herokuapp.com'
});


export default instance;
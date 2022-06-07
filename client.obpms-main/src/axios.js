import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://54.190.5.246:5000'
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://api.navimaurya.in'
});


export default instance;
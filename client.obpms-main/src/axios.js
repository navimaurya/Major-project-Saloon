import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://54.190.5.246:5000'
    // baseURL: 'http://localhost:5000'
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.navimaurya.in' : 'http://localhost:5000'
});


export default instance;
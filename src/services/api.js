import axios from 'axios';

const api = axios.create({
    baseURL: 'https://supermarketappapi.leonardodaiub.com/',
});

export default api;

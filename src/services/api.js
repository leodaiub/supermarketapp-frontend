import axios from 'axios';

const api = axios.create({
    baseURL: 'https://supermarketapp-dev2.us-west-2.elasticbeanstalk.com/',
});

export default api;

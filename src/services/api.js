import axios from 'axios';

const api = axios.create({
    baseURL: 'http://supermarketapp-prod.us-west-2.elasticbeanstalk.com/',
});

export default api;

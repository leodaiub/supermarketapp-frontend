import axios from 'axios';

const api = axios.create({
    baseURL: 'http://supermarketappapi-dev.us-west-2.elasticbeanstalk.com/',
});

export default api;
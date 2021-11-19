import axios from 'axios';
const BASE_URL = 'http://www.omdbapi.com';

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
});

client.interceptors.request.use(config => {
    return {
        ...config,
        params: {
            ...config.params,
            apikey: 'd1cf856b',
            type: 'movie',
        },
    };
});

export { client };

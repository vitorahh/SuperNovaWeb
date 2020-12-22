import axios from 'axios';

const api = axios.create({
    baseURL:'http://dev07:3001/api/v1',
    headers: {'Access-Control-Allow-Origin': '*'}
});

export default api;

import axios from 'axios';

const api = axios.create({
    baseURL:'http://server:3000/api/v1',
    
});

export default api;

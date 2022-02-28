import axios from 'axios';

const api = axios.create({
    baseURL: 'https://signalementcloud.herokuapp.com/api/'
});

export default api;
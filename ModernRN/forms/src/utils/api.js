import axios from 'axios';
import CONFIG from "../constant.json";

const API = axios.create({
    baseURL: `${CONFIG.ROOT_URL}/`,
    headers: {
        Authorization: `Client-ID ${CONFIG.ACCESS_KEY}`
    }
});

export default API;
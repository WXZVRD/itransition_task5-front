import axios from "axios";

const instance = axios.create({
    baseURL: 'https://melodic-alfajores-adbef2.netlify.app'
});

export default instance

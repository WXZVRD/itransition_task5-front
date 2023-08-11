import axios from "axios";

const instance = axios.create({
    baseURL: 'https://64d61d3457541c000874a44b--melodic-alfajores-adbef2.netlify.app'
});

export default instance

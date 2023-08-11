import axios from "axios";

const instance = axios.create({
    baseURL: 'https://64d61969c55b4555432892a2--melodic-alfajores-adbef2.netlify.app'
});

export default instance

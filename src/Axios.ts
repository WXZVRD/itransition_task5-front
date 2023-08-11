import axios from "axios";

const instance = axios.create({
    baseURL: 'https://itransition-task5-backend-wxzvrd.onrender.com'
});

export default instance

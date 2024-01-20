import axios from "axios";


const axiosClient = axios.create({
    baseURL: 'http://localhost:3000', // Set your base URL
    timeout: 5000, // Set the timeout for requests (in milliseconds)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
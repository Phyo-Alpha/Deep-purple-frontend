import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.REACT_APP_BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});
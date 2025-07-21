import axios from "axios";

const serverURL = axios.create({
    baseURL: "http://localhost:4000/api",
    // baseURL: "https://api-truenumber.onrender.com/api",
});

export default serverURL;
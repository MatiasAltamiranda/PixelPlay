import axios from "axios";

const clientAxios = axios.create({
    baseURL:"https://pixelplayback.onrender.com/"
    /* baseURL: "http://localhost:7500" */
});

export default clientAxios;
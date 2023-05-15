import axios from "axios";

const clientAxios = axios.create({
    baseURL: "http://localhost:7500"
});

export default clientAxios;
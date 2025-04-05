import axios from "axios";
import API_CONSTANTS from "./api.constants";

const httpClient = axios.create({
    baseURL: API_CONSTANTS.BASE_URL
})

export default httpClient;

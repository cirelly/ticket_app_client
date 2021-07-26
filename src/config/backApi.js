import axios from 'axios'

import httpErrorHandler from "../utils/httpErrorHandler";

const API = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST,
    
});

API.interceptors.response.use( response => {

    httpErrorHandler(response);

    return response;

} );


export default API;
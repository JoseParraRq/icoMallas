import axios from 'axios';
import { urlAPI, configTokenAXI } from "./utils";

const instance = axios.create({
    baseURL: urlAPI,
    headers: {
        'content-type':'application/json',
    },
});

// const showSpinner = () => {
//     const spinnerContainer = document.getElementById('spinner-container');
//     spinnerContainer.style.display = 'block';
//   };
  
//   const hideSpinner = () => {
//     const spinnerContainer = document.getElementById('spinner-container');
//     spinnerContainer.style.display = 'none';
//   };

// instance.interceptors.request.use(function (config) {
//     //document.body.classList.add('loading-indicator');
//     showSpinner();
    
//     return config
     
// }, function (error) {
//     return Promise.reject(error);
// });

// instance.interceptors.response.use(function (response) {
//     //document.body.classList.remove('loading-indicator');
//     hideSpinner();
//     return response;
// }, function (error) {
//     hideSpinner();
//     return Promise.reject(error);
// });

export default {
    get: (url) =>
    instance({
        method: 'GET',
        // headers: configTokenAXI,
        url
    }),

    post: (url, params = {}) =>
    instance({
        method: 'POST',
        url,
        data: params,
        // headers: configTokenAXI,
    }),

    patch: (url, params = {}) =>
    instance({
        method: 'PATCH',
        url,
        data: params,
        headers: configTokenAXI,
    }),

    post_public: (url, params = {}) =>
    instance({
        method: 'POST',
        url,
        data: params
    }),

    delete: (url, params = {}) =>
        instance({
            method: 'DELETE',
            url,
            data: params,
            // headers: configTokenAXI,
        }),
}
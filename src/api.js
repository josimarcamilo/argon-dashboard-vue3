import axios from 'axios';
import { apiUrl } from './helpers.js'

axios.interceptors.response.use(function (response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    console.log('resposta na casa dos 2xx', response);
    return response;
}, function (error) {
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    console.log('resposta diferente de 2xx', error);

    return Promise.reject(error);
});

function get(path, params){
    return axios({
        method: "get",
        url: apiUrl() + path,
        data: params,
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('api_token')
        }
    });
}

function post(path, params){
    return axios({
        method: "post",
        url: apiUrl() + path,
        data: params,
    });
}

export {
    post,
    get
}
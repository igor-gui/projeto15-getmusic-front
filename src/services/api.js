import axios from "axios";

const baseUrl = 'http://localhost:5000'
const api = axios.create(baseUrl)

export function cadastrar(data){
    const promise = api.post('/signup', data)
    return promise
}

export function entrar(data){
    const promise = api.post('login', data)
    return promise
}
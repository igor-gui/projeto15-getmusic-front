import axios from "axios";

const baseUrl = 'http://localhost:5000'
const api = axios.create({baseUrl})

export async function cadastrar(data){
    const promise = await api.post('/signup', data)
    return promise
}

export async function entrar(data){
    const promise = await api.post('/login', data)
    return promise
}
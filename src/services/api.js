import axios from "axios";

const api = axios.create({
    baseURL: 'https://getmusic-api.onrender.com'
})

export async function cadastrar(data){
    const promise = await api.post('/signup', data)
    return promise
}

export async function entrar(data){
    const promise = await api.post('/login', data)
    return promise
}
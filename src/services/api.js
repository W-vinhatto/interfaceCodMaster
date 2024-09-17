import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

// usando metodo interceptor para pegar as informaçoes do local storage
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
// espondo o token no local e com nome que será procurado pela api
    config.headers.authorization = `Bearer ${token}`
    return config
})

export default api
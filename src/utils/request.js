import axios from 'axios'




const instance = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : '/',
  timeout: 3000
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default instance
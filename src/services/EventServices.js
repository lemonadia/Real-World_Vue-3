import axios from 'axios'

//single axios instance to use in the entire app (for the entire API)
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

//export method to reach the events only

export default{
    getEvents() {
        return apiClient.get('/events')
    }
}


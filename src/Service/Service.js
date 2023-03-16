import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
    }
})
export default{
    getDetailsMovie(){
        return api.get('/photos')
    }
}
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hinder-backend.herokuapp.com'
})

export default instance;
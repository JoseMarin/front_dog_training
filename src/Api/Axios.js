import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:5000/post'
});

export default clienteAxios;
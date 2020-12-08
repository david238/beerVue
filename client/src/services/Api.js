import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `http://localhost:8081/`,
        headers: {'x-user': 'dt@gmail.com'}
    });
};
import axios from 'axios';

const apiURL = 'https://we-skillz-phonebook-task.herokuapp.com/api/v1';
const authAxios = axios.create({
    baseURL: apiURL,
    headers: {
        Authorization: `Bearer ${localStorage.token}`,
    },
});

export default authAxios;

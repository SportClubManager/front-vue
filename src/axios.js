import axios from 'axios';

axios.defaults.baseURL = 'http://localhost/api/';

const auth = JSON.parse(localStorage.getItem('auth'));

if (auth && auth.user) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.user.token;
}

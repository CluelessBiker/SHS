import axios from 'axios';

axios.defaults.baseURL = 'https://shs-drf-414bc8b321a8.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

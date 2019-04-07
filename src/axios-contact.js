import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://seeker-4ebb7.firebaseio.com/' 
});

export default instance;
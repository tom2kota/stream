import axios from "axios";

const production = 'https://stream-json-server.herokuapp.com/';
// const development = 'http://localhost:3001/';

export default axios.create({
    baseURL: production
})
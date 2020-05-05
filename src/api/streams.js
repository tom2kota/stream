//baseURL: 'http://localhost:3001'

import axios from "axios";

export default axios.create({
  baseURL: 'https://stream-json-server.herokuapp.com/'
})

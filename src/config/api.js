import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

const randomUser = axios.create({
  baseURL: 'https://randomuser.me/api'
})

export {
  api,
  randomUser
}
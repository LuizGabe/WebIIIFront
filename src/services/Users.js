import { api } from "../config/api";

const path = '/user';

const getAllUsers = () => api.get(path)
  .then((response) => (response.data))

const searchUser = (pesquisa) => api.get(`${path}?search=${pesquisa}`)
  .then((response) => (response.data))

const gerUserById = (id) => api.get(`${path}/${id}`)

const addUpdateUser = (user) => api.post(path, user, { headers: { 'Content-Type': 'application/json' } })

const deleteUser = (id) => api.delete(`${path}/${id}`)

export {
  getAllUsers,
  searchUser,
  gerUserById,
  addUpdateUser,
  deleteUser
}
import { api } from "../config/api";

const path = '/contact';

const getAllContacts = () => api.get(path)
  .then((response) => (response.data))

const searchContact = (pesquisa) => api.get(`${path}?search=${pesquisa}`)
  .then((response) => (response.data))

const addUpdateContact = (contact) => api.post(path, contact, { headers: { 'Content-Type': 'application/json' } })

const deleteContact = (id) => api.delete(`${path}/${id}`)

export {
  getAllContacts,
  searchContact,
  addUpdateContact,
  deleteContact
}

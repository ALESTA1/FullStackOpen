import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const del = (id) =>{

    return axios.delete
}
export default {
    create :create
}
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const del = (id) =>{

    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id,newObject) =>{

    return axios.put(`${baseUrl}/${id}`,newObject)
}
export default {
    create :create,
    del :del,
    update : update
}
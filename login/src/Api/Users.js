import axios from 'axios'
const baseURL = 'https://fakestoreapi.com/users'

async function pegarTodosUsuarios(){
    let users = await axios.get(baseURL)
    return users
}

export default pegarTodosUsuarios

import axios from 'axios'
const baseURL = 'https://fakestoreapi.com/products'

async function pegarTodosProdutos(){
    let Produtos = await axios.get(baseURL)
    return Produtos
}
async function pegarUmProduto(id){
    let Produto = await axios.get(baseURL+"/"+id)
    return Produto
}

export default {
    pegarTodosProdutos,
    pegarUmProduto
}
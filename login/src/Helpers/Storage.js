


function Save(item, key){
    let itemString = JSON.stringify(item)
    localStorage.setItem(key, itemString)
}
function Get(chave){
    return JSON.parse(localStorage.getItem(chave))
}

export default {
    Save,
    Get
}

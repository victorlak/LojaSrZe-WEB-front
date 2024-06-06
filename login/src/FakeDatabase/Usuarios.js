import pegarTodosUsuarios from '../Api/Users';

async function Login({email, senha}){
    let response = await pegarTodosUsuarios()
    let allUsers = response.data
    const usuario = allUsers.find(usuario => usuario.email === email && usuario.password === senha);
    if(usuario){
        return {
            status: 200,
            data: usuario
        };
    }else{
        return {
            status: 404,
            data: {
                message: "Usuário não encontrado"
            }
        }
    }
}

export default {
    Login
}
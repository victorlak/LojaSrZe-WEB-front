import Usuarios from './Database/Usuarios';

async function Login({email, senha}){
    const usuario = Usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
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
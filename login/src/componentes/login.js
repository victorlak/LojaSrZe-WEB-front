import { Button} from 'bootstrap';
import { useState } from 'react';
import '../estilos/login.css';
import logo from './img/logoSrZe.png'
import logo2 from './img/logoSrZe2.png'
import Usuarios from '../FakeDatabase/Usuarios'

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleChangeEmail= (e) => {
        setEmail(e.target.value)
    }
    const handleChangeSenha= (e) => {
        setSenha(e.target.value)
    }
   async function criarObjeto(){
        const login = {
            email: email,
            senha: senha
        }
       const response = await Usuarios.Login(login)
      
       if (response.status === 200) {
        console.log(response.data);
           alert('Login efetuado com sucesso')
           
       }else {
              alert('Usuário não encontrado')
       }
        
    }


  return (
    <div className="All">
        <div className='Login'>
            <div className='Formulario'>
                <div class="mb-3 row">
                    <h1 className='display-2'>Login:</h1>
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
                    <input onChange={handleChangeEmail} type="text" class="form-control"></input>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Senha:</label>
                        <input onChange={handleChangeSenha} type="password" class="form-control" id="inputPassword"></input>
                        <div className='LoginCadastro'>
                            <button style={{color:'white'}} type="button" class="btn btn-warning">Cadastrar</button>
                            <button onClick={criarObjeto} style={{color:'white'}} type="button" class="btn btn-warning">Entrar</button>
                        </div>
                </div>
            </div>
        </div>
        <div className='Img'>
            <img id='logo' src={logo2} />
        </div>
    </div>
  );
}

export default Login;
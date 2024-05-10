import { Button} from 'bootstrap';
import { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleChangeEmail= (e) => {
        setEmail(e.target.value)
    }
    const handleChangeSenha= (e) => {
        setSenha(e.target.value)
    }
    function criarObjeto(){
        const login = {
            Email: email,
            Senha: senha
        }
        console.log(login);
        return login
    }


  return (
    <div className="All">
        <div className='Login'>
            <div className='Formulario'>
                <div class="mb-3 row">
                    <h1 className='display-2'>Login:</h1>
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <input onChange={handleChangeEmail} type="text" class="form-control"></input>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Senha</label>
                        <input onChange={handleChangeSenha} type="password" class="form-control" id="inputPassword"></input>
                        <div className='LoginCadastro'>
                            <button style={{color:'white'}} type="button" class="btn btn-warning">Cadastrar</button>
                            <button onClick={criarObjeto} style={{color:'white'}} type="button" class="btn btn-warning">Entrar</button>
                        </div>
                </div>
            </div>
        </div>
        <div className='Img'>
            <div className='Logo'>
                <h3>Mercado</h3>
                <h3>do</h3>
                <h1>Senhor Zé</h1>
            </div>
        </div>
    </div>
  );
}

export default Login;
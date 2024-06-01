/*
1- salvar as informações(Local Storage)
2- resgatar essas infos na home
3- fazer as verificações
4- crie funções para lidar com LS
*/ 
import { useState } from 'react';
import './login.css';
import logo2 from '../../componentes/img/logoSrZe2.png'
import Usuarios from '../../FakeDatabase/Usuarios'
import { useNavigate } from 'react-router-dom'
import Falha from '../../componentes/Alertas/Falha';
import { Input } from 'reactstrap';
import Storage from '../../Helpers/Storage';


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    const[emailInvalid, setEmailInvalid] = useState(false)
    const[senhaInvalid, setSenhaInvalid] = useState(false)
    

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
       const user = await Usuarios.Login(login)
      
       if (user.status === 200) {
           Storage.Save(user.data,"user")
           navigate('/')
           
       }else {
        let alerta = {
            title: "Usuário ou senha inválidos",
            text: "Tente novamente"
        }
        Falha(alerta)
        setEmailInvalid(true)
        setSenhaInvalid(true)
       }
        
    }


  return (
    <div className="All">
        <div className='Login'>
            <div className='Formulario'>
                <div className="mb-3 row">
                    <h1 className='display-2'>Login:</h1>
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email:</label>
                    <Input invalid={emailInvalid} onChange={handleChangeEmail} type="text" className="form-control"></Input>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Senha:</label>
                        <Input invalid={senhaInvalid} onChange={handleChangeSenha} type="password" className="form-control" id="inputPassword"></Input>
                        <div className='LoginCadastro'>
                            <button style={{color:'white'}} onClick={() => navigate('/cadastro')} type="button" className="btn btn-warning">Cadastrar</button>
                            <button onClick={criarObjeto} style={{color:'white'}} type="button" className="btn btn-warning">Entrar</button>
                        </div>
                </div>
            </div>
        </div>
        <div className='Img'>
            <img className='img-fluid hover-zoom' id='logo'onClick={() => navigate('/')} src={logo2} />
        </div>
        {/*
            emailInvalid == true ? <h1>teste</h1> : null
        */}
    </div>
  );
}

export default Login;
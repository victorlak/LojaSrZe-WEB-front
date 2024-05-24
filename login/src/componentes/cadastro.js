import { Container } from 'reactstrap'
import '../estilos/cadastro.css'

function Cadastro(){

    return (
        <>  
            <Container className='body' fluid>  
                <Container className='cadastro'>
                    <strong>Dados obrigatórios*</strong>
                    <div className='nome mt-3'>
                        <h6>Nome:</h6>
                        <input type="text" placeholder='' class="form-control form-control-sm m-2"></input>
                        <h6>Sobrenome:</h6>
                        <input type="text" placeholder='' class="form-control form-control-sm m-2"></input>
                    </div>
                    <h1 className='display-6'>Email:</h1>
                    <input type="text" placeholder='exemplo@gmail.com' class="form-control"></input>
                    <h1 className='display-6'>Senha:</h1>
                    <input type="password" placeholder='informe a senha' class="form-control" id="inputPassword"></input>
                    <input type="password" placeholder='confirme a senha' class="form-control mt-3" id="inputPassword"></input>
                    <h1 className='display-6'>Endereço:</h1>
                    <input type="text" placeholder='Bairro/rua/número' class="form-control"></input>
                </Container>
                <Container className='cadastro'>
                    <strong>Dados Opcionais*</strong>
                    <h1 className='display-6 mt-3'>Email(recuperação):</h1>
                    <input type="text" placeholder='exemplo@gmail.com' class="form-control"></input>
                    <h1 className='display-6 mt-3'>Celular:</h1>
                    <input type="text" placeholder='*DDD 999999999' class="form-control"></input>
                    <div className='mt-3'>
                        <strong className='mt-5'>Preferência de contato:</strong>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Celular
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Email
                            </label>
                        </div>
                    </div>
                    <button style={{color:'white'}} type="button" class="btn btn-warning mt-3">Concluir cadastro</button>


                </Container>
            </Container>
        </>
    )
}
export default Cadastro
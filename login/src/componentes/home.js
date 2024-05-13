
import React from 'react';
import logo from './img/logoSrZe2.png'
import logoPerfil from './img/logoPerfil.png'
import { Container, Row, Col, Button } from 'reactstrap';
import '../estilos/home.css';



function Home() {
  return (
    <>
      <Container fluid className="Nav">
        <div className='cadastroLogin'>
          <img id='Logo' src={logo} />
          <>
          <img id='LogoPerfil' src={logoPerfil} />
          <button style={{color:'white'}} type="button" class="btn btn-warning btn-nav rounded-1">Cadastrar/Entrar</button>
          </>
        </div>
          <Row>
            <Col>
            <button style={{color:'white'}} type="button" class="btn btn-warning rounded-1">Eletrônicos</button>
            </Col>
            <Col>
            <button style={{color:'white'}} type="button" class="btn btn-warning rounded-1">Mercado</button>
            </Col>
            <Col>
            <button style={{color:'white'}} type="button" class="btn btn-warning rounded-1">Móveis</button>
            </Col>
            <Col>
            <button style={{color:'white'}} type="button" class="btn btn-warning rounded-1">Serviços</button>
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default Home;
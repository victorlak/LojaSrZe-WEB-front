
import React from 'react';
import card from './img/cardsSrZé.jpg'
import logo from './img/logoSrZe2.png'
import logoPerfil from './img/logoPerfil.png'
import logoBaner from './img/banerSrZé.jpg'
import { Container, Row, Col, Button } from 'reactstrap';
import '../estilos/home.css';
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate()
  return (
    <div className='all'>
      <Container fluid className="Nav">
        <div className='cadastroLogin'>
          <img id='Logo'  src={logo} />
          <input type="text" className="mx-3 form-control form-control-sm" placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="button-addon2" />
          <button style={{color:'white'}} type="button" class="btn btn-warning btn-nav rounded-1">Pesquisar</button>
          <img id='LogoPerfil'className='mx-2' src={logoPerfil} />
          <button style={{color:'white'}} type="button" onClick={() => navigate('/login')} class="btn btn-sm btn-warning btn-nav rounded-1">Cadastrar/Entrar</button>
          
        </div>
          <Row>
            <Col>
            <button style={{color:'white'}} type="button" class="btn btn-warning  rounded-1">Eletrônicos</button>
            </Col>
            <Col>
            <button style={{color:'white'}} type="button" class="btn btn-warning  rounded-1">Mercado</button>
            </Col>
            <Col>
            <button style={{color:'white'}} type="button" class="btn btn-warning rounded-1">Móveis</button>
            </Col>
            <Col>
            <button style={{color:'white'}} type="button" class="btn btn-warning  rounded-1">Serviços</button>
            </Col>
          </Row>
      </Container>
      <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={logoBaner} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={logoBaner} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={logoBaner} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Container fluid className='oferta mt-4'>
        <h1 className='font-weight-bold'>!OFERTAS!</h1>
      </Container>
      <Container  className='cards'>
        <Row>
        <Col className='mt-1' md={4}>
            <div class="card " style={{width: '18rem'}}>
              <img src={card} class="card-img-top mycard" alt="..."/>
              <div class="card-body">
                <p class="card-text"></p>
              </div>
            </div>
          </Col>
          <Col className='mt-1' md={4}>
            <div class="card " style={{width: '18rem'}}>
              <img src={card} class="card-img-top mycard" alt="..."/>
              <div class="card-body">
                <p class="card-text"></p>
              </div>
            </div>
          </Col>
          <Col className='mt-1' md={4}>
            <div class="card " style={{width: '18rem'}}>
              <img src={card} class="card-img-top mycard" alt="..."/>
              <div class="card-body">
                <p class="card-text"></p>
              </div>
            </div>
          </Col>
          <Col className='mt-3' md={4}>
            <div class="card " style={{width: '18rem'}}>
              <img src={card} class="card-img-top mycard" alt="..."/>
              <div class="card-body">
                <p class="card-text"></p>
              </div>
            </div>
          </Col>
          <Col className='mt-3' md={4}>
            <div class="card " style={{width: '18rem'}}>
              <img src={card} class="card-img-top mycard" alt="..."/>
              <div class="card-body">
                <p class="card-text"></p>
              </div>
            </div>
          </Col>
          <Col className='mt-3' md={4}>
            <div class="card " style={{width: '18rem'}}>
              <img src={card} class="card-img-top mycard" alt="..."/>
              <div class="card-body">
                <p class="card-text"></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      

    </div>
  );
}

export default Home;

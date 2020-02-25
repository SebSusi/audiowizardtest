
import NavBar from './components/NavigationBar'
import { Col, Container, Row , Button, ButtonToolbar } from 'react-bootstrap';
import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import LinkButton from "./components/linkButton"
import UserForm from './userForm';
import Name from './components/nameComponent';
import Sex from './components/sexComponent';


function FirstView(){
  return(
    <Container className="test">
        <Col md={14}>
          Peux-tu indiquer l'identité du patient?
            <UserForm />
            <LinkButton to="/second/">Continuer</LinkButton>
        </Col>
    </Container>
  )
}

function SeconView(){
  return(
    <Container>
    <Col md={14 }>
      <Sex></Sex>
      <LinkButton style={{margin:"20px"}} to="/">Home</LinkButton>
    </Col>
</Container>
  )
}

function ThirdView(){
  return(
    <Container>
      <Col md={12}>
      <Name />
      </Col>
    </Container>
  )
}

function MainHome() {
  return (
    <Router>
      <div>       
          <Route path="/" exact component={FirstView} />
          <Route path="/second/" component={SeconView} />
          <Route path="/name/" component={ThirdView} />
      </div>
    </Router>
  );
}

function App() {
  return (
    <div>
      <NavBar> {NavBar.NavigationBar} </NavBar>
      <Container fluid>
        <Row>
          <Col  md={2} style={{backgroundColor: "lightgrey", height : "94vh"}}>
          <div>
            <ButtonToolbar style = {{marginTop: '20px'}}>
                <Button variant="primary" size="lg" block style={{marginBottom: '20px'}}>
                      1ère visite
                </Button>
                <Button variant="primary" size="lg" block style={{marginBottom: '20px'}}>
                      Adaptation
                </Button>
                <Button variant="primary" size="lg" block style={{marginBottom: '20px'}}>
                      Essais
                </Button>
                <Button variant="primary" size="lg" block style={{marginBottom: '20px'}}>
                      Appareillés
                </Button>
            </ButtonToolbar>
            </div>
          </Col>
          <Col xs lg="10">
            <Container>
              <div style={{height: "100px"}}></div>
              <Row className="justify-content-md-center">
                <MainHome></MainHome>
              </Row> 
          </Container>
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        </Row>
      </Container>
    </div>
    
  )
}


export default App;
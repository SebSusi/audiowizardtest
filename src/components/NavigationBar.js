import React from 'react';
import {Container, Image, Navbar, Button } from 'react-bootstrap';
import image from '../drapeau-corse.jpg'

const NavigationBar = () => (
<Navbar expand="lg" variant="light" bg="light">
  <Container fluid>
      <Image src={image} rounded style={{maxWidth: '3' + 'em'}}/>
    <Navbar.Brand href="#"><Button>Mon compte</Button></Navbar.Brand>
  </Container>
</Navbar>
)

export default NavigationBar
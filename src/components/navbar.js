import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import PersonIcon from '@material-ui/icons/Person';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">MAsE Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="home">Inicio</Nav.Link>
                    <Nav.Link href="materias">Matérias</Nav.Link>
                    <Nav.Link href="explicadores">Explicadores</Nav.Link>
                </Nav>
                <Nav>
                <Button href="login" variant="contained" startIcon={<PersonIcon></PersonIcon>}>Login</Button>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        )
    }
}

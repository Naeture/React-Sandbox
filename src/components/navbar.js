import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown,} from "react-bootstrap";

class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="#home">navbar.js > react-sandbox</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#cardDeck">Card Deck</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Text>
                    Signed in as: <a href="#login">Chris Eichhorn</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navbar;
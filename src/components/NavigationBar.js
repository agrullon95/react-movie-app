import React , {useContext} from 'react';
// import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signOut } from '../auth/firebase';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBarSlideIn = (currentUser) => {
    return (
        <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {currentUser ? 
                    <>
                    <Navbar.Text>
                        Signed in as: <a href="#login">{currentUser.email}</a>
                    </Navbar.Text>
                    <Button variant="outline-danger" onClick={signOut}>Sign out</Button>
                    </>
                    :
                    <Button variant="outline-primary" href="/login">Login</Button>
                }
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    )
}

function NavigationBar() {
    const { currentUser } = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse className="justify-content-end">
                {currentUser ? 
                    <Button variant="outline-danger" onClick={signOut}>Sign out</Button>
                    :
                    <Button variant="outline-primary" href="/login">Login</Button>
                }
                {NavBarSlideIn(currentUser)}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar; 
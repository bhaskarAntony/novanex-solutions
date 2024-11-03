import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import logo from '../../images/apexion logo.png'

function Header() {
  return (
   <header>
     <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our Mision</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                 Our Vision
              </NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Digital Transformation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Application Development (Mobile, Web, Cloud)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Enterprise Software Solutions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Data Analytics and BI
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
              Artificial Intelligence and Machine Learning
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
              Cybersecurity
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
              Cloud Computing (AWS, Azure, Google Cloud)
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
              IT Consulting
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
              DevOps  
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
              Quality Assurance and Testing
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  );
}

export default Header;
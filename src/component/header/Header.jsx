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
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <NavDropdown title="Our Services" id="basic-nav-dropdown">
    <NavDropdown.Item href="/services/digital-transformation">Digital Transformation</NavDropdown.Item>
    <NavDropdown.Item href="/services/application-development">Application Development (Mobile, Web, Cloud)</NavDropdown.Item>
    <NavDropdown.Item href="/services/enterprise-software-solutions">Enterprise Software Solutions</NavDropdown.Item>
    <NavDropdown.Item href="/services/data-analytics-bi">Data Analytics and BI</NavDropdown.Item>
    <NavDropdown.Item href="/services/artificial-intelligence-machine-learning">Artificial Intelligence and Machine Learning</NavDropdown.Item>
    <NavDropdown.Item href="/services/cybersecurity">Cybersecurity</NavDropdown.Item>
    <NavDropdown.Item href="/services/cloud-computing">Cloud Computing (AWS, Azure, Google Cloud)</NavDropdown.Item>
    <NavDropdown.Item href="/services/it-consulting">IT Consulting</NavDropdown.Item>
    <NavDropdown.Item href="/services/devops">DevOps</NavDropdown.Item>
    <NavDropdown.Item href="/services/quality-assurance-testing">Quality Assurance and Testing</NavDropdown.Item>
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
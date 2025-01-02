import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import logo from '../../images/novanex_main_logo.jpg'

function Header() {
  return (
   <header>
     <Navbar expand="lg">
      <Container fluid className='align-items-center'>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <NavDropdown title="Our Services" id="basic-nav-dropdown">
    <NavDropdown.Item href="/services/software-training">Software Training</NavDropdown.Item>
    <NavDropdown.Item href="/services/career-councelling">Career Counseling</NavDropdown.Item>
    <NavDropdown.Item href="/services/placement-councelling">Placement Counseling</NavDropdown.Item>
    <NavDropdown.Item href="/services/HR">Human Resource Consulting</NavDropdown.Item>
    {/* <NavDropdown.Item href="/services/data-analytics-bi">Customized Corporate Training</NavDropdown.Item> */}
    {/* <NavDropdown.Item href="/services/artificial-intelligence-machine-learning">One-on-One Consultations</NavDropdown.Item> */}
    <NavDropdown.Item href="/services/transform">Non IT to IT Placement Support</NavDropdown.Item>
   
</NavDropdown>

            <Nav.Link href="/contact-us">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  );
}

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css';
import  logo  from '../images/logo.png';
import { Link } from 'react-router-dom';

function NavBar()
{
  return(
  <>
  <Navbar expand="lg" className="bg-white border border-1 border-grey" fixed="top" >
      <Container fluid className='w-75'>
      <Navbar.Brand href="/" className='me-5'>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
        <Nav variant="underline" defaultActiveKey="/" className='me-5'>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Specialities</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=""
            />
          </Col>
          <Col xs="auto">
          <button className='pink-btn'>Search</button>

          </Col>
        </Row>
      </Form>
      
      <button className='btn border border-1 border-black btn-sm my-1 ms-auto'>
      <Link to='/SignIn1' className='text-decoration-none text-dark' >
        Login / Signup
        </Link>
        </button>  

        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}
export default NavBar;
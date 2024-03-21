import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css';

function NavBar()
{
  return(
  <>
  <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme="light" fixed="top" >
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="navlogo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
          <Nav.Link href="#Specialists">Specialities</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact us">Contact us</Nav.Link>
            <Nav.Link href='#FAQ'>FAQ's</Nav.Link>
            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
          <Button type="submit" className='search-btn' 
          style={{ color: '#ffffff',
           backgroundColor: '#fe5757',
            borderRadius: '6px',
             border: 'none',
             padding: '6px' }}>
              Search
          </Button>

          </Col>
        </Row>
      </Form>
            <Nav.Link href='#Sign in'>Sign in</Nav.Link>
            <Nav.Link href='#Sign up'>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}
export default NavBar;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navigation.css"

function Navigation() {
  return (
    <>
    <div className='custom_bg_color'>
      <div className='custom_bg_image'>
        <Navbar expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#">Code Cloud</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll" className='ml-auto' style={{justifyContent:"end"}}>
              <Nav
                className="ml-auto"
                style={{ maxHeight: '100px'}}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>

                <NavDropdown title="Company" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Our Process</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Industries We Serve</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Service" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">UX/UI Design</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Web Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Mobile Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Graphic Design</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">SEO Service</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Custom Software Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Software Product Development</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#action1">Partner With Us</Nav.Link>

              </Nav>
              {/* <Form className="d-flex"> */}
                <div className='custom_contact_button'>Contact Us</div>
              {/* </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>


        
      </div>
    </div>
    </>
  );
}

export default Navigation;
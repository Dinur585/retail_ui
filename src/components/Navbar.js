import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import cart from '../images/cart.jpg'
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import '../index.css';
function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
    <Navbar.Brand href="#home">
          <img
              alt=""
              src={cart}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
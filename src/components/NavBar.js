import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { BsFillBagDashFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">The Fit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/men">
                Mens
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/women">
                Women's
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jewelry">
                Jewelry
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/electronics">
                Electronics
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>

        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="dark">
              <BsFillBagDashFill color="darkGray" fontSize="25px" />
              <Badge as={Link} to="/cart">
                {4}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

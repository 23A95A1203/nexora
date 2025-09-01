import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, NavDropdown, Image } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';
import SearchBox from './SearchBox';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      toast.success('Logout successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      collapseOnSelect
      className="fixed-top shadow-sm py-2 z-2"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image
              src="/Nexora.png"
              alt="Nexora"
              height="40"
              className="d-inline-block align-top"
              rounded
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto m-2 align-items-center">
            <SearchBox />

            <LinkContainer to="/cart">
              <Nav.Link className="d-flex align-items-center">
                <FaShoppingCart className="me-1" />
                Cart
                {cartItems.length > 0 && (
                  <Badge
                    pill
                    bg="warning"
                    text="dark"
                    className="ms-1"
                  >
                    <strong>
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </strong>
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <NavDropdown
                title={<span className="fw-bold">Hello 👋, {userInfo.name}</span>}
                id="username"
                align="end"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="d-flex align-items-center">
                  <FaUser className="me-1" />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

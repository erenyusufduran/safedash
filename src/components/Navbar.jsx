/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledForm = styled(Form)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 !important;
    gap: 15px !important;
  }
`;

const StyledNavbar = styled(Navbar)`
  z-index: 1000;
`;

const NavItems = styled.button`
  padding: 8px 8px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: transparent;
  transition: 0.4s ease-in;

  &:hover {
    color: red !important;
  }
`;

const StyledLinkComp = ({ to, setExpanded, children, pathname }) => {
  const navigate = useNavigate();

  return (
    <Nav.Link
      onClick={() => {
        navigate(to, { replace: true });
        setExpanded(false);
      }}
    >
      <NavItems type={pathname}>{children}</NavItems>
    </Nav.Link>
  );
};

function NavBar({ expanded, setExpanded }) {
  const navigate = useNavigate();

  return (
    <StyledNavbar expanded={expanded} expand="md" className="bg-body-tertiary me-5 w-100 text-center position-fixed">
      <Container fluid>
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/', { replace: true })} className="ms-5">
          <img style={{ width: '250px' }} src="/safedash-logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded((expanded) => (expanded ? false : 'expanded'))} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 " navbarScroll></Nav>

          <StyledForm className="d-flex me-5 gap-5 justify-content-center">
            <StyledLinkComp to="/" setExpanded={setExpanded}>
              Home
            </StyledLinkComp>
            <StyledLinkComp to="/product" setExpanded={setExpanded}>
              Product
            </StyledLinkComp>
            <StyledLinkComp to="/about" setExpanded={setExpanded}>
              About
            </StyledLinkComp>
            <StyledLinkComp to="/contact" setExpanded={setExpanded}>
              Contact
            </StyledLinkComp>
          </StyledForm>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavBar;

/* eslint-disable react/prop-types */
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styled from 'styled-components';

const StyledForm = styled(Form)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 !important;
    gap: 15px !important;
  }
`;

const StyledNavbar = styled(Navbar)`
  z-index: 1000;
  background-color: rgba(215, 222, 220, 0.6);

  @media screen and (max-width: 768px) {
    background-color: rgba(215, 222, 220, 0.8);
  }
`;

const NavItems = styled.a`
  padding: 8px 8px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: transparent;
  text-decoration: none;
  transition: 0.2s ease-in;
  color: #000;

  &:hover {
    color: #33638f !important;
  }
`;

const StyledLinkComp = ({ to, setExpanded, children }) => {
  return (
    <NavItems
      href={to}
      onClick={() => {
        setExpanded(false);
      }}
    >
      {children}
    </NavItems>
  );
};

const MobileNav = styled(Nav)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const MobileNoneDiv = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  padding: 8px 8px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: transparent;
`;

const Logo = styled.img`
  width: 250px;

  @media screen and (max-width: 400px) {
    width: 160px !important;
  }
`;

function NavBar({ expanded, setExpanded }) {
  return (
    <StyledNavbar expanded={expanded} expand="md" className="me-5 w-100 text-center position-fixed">
      <Container fluid>
        <Navbar.Brand style={{ cursor: 'pointer' }} href="#home" className="ms-5">
          <Logo src="/safedash-logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded((expanded) => (expanded ? false : 'expanded'))} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2" navbarScroll></Nav>

          <StyledForm className="d-flex me-5 gap-5 justify-content-center">
            <StyledLinkComp to="#home" setExpanded={setExpanded}>
              Home
            </StyledLinkComp>
            <MobileNoneDiv>
              <StyledNavDropdown drop="down" title="Products">
                <NavDropdown.Item onClick={() => setExpanded(false)} href="#cast-ddos">
                  CastDDOS
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item onClick={() => setExpanded(false)} href="#cast-load">
                  CastLOAD
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item onClick={() => setExpanded(false)} href="#cast-pen">
                  CastPEN
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item disabled={true} href="#cast-ddos">
                  CastDASH (IN Progress)
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item disabled={true} href="#cast-ddos">
                  CastAI (IN Progress)
                </NavDropdown.Item>
              </StyledNavDropdown>
            </MobileNoneDiv>
            <MobileNav navbarScroll style={{ maxHeight: '280px' }}>
              <StyledNavDropdown drop="down" title="Products">
                <NavDropdown.Item onClick={() => setExpanded(false)} href="#cast-ddos">
                  CastDDOS
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item onClick={() => setExpanded(false)} href="#cast-load">
                  CastLOAD
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item onClick={() => setExpanded(false)} href="#cast-pen">
                  CastPEN
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item disabled={true} href="#cast-ddos">
                  CastDASH
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item disabled={true} href="#cast-ddos">
                  CastAI
                </NavDropdown.Item>
              </StyledNavDropdown>
            </MobileNav>
            <StyledLinkComp to="#about" setExpanded={setExpanded}>
              About
            </StyledLinkComp>
            <StyledLinkComp to="#contact" setExpanded={setExpanded}>
              Contact
            </StyledLinkComp>
          </StyledForm>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavBar;

import React from 'react';
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TopNavMenu = () => {
  const navItems = [
    {
      key: 1,
      path: '/',
      name: 'Home',
    },
    {
      key: 2,
      path: '/about',
      name: 'About',
    },
    {
      key: 3,
      path: '/contact',
      name: 'Contact',
    },
  ];
  return (
    <Navbar key='md' expand='md'>
      <Container fluid>
        <Navbar.Brand><Image src='/logo.png' width='200' height='40' /></Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' className='nav-toggle-button' />
        <Navbar.Offcanvas id='offcanvasNavbar-expand-md' aria-labelledby='offcanvasNavbarLabel-expand-md' placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><Image src='/logo.png' width='200' height='40' /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-center flex-grow-1 pe-3'>
              {navItems.map((navItem, key) => (
                <NavLink key={key} to={navItem.path} className='nav-link'>
                  {navItem.name}
                </NavLink>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default TopNavMenu;

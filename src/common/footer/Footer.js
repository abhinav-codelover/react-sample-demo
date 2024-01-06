import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer-bottom'>
      <Container fluid>
        <Row className='py-3'>
          <Col md='4' className='text-center'>
            <Image src='/logo.png' width='200' height='40' />
            <p className='text-start pt-3'>
              <em>Lorem ipsum dolor sit, consectetur adipiscing elit. Mauris aliquet posuere congue. Fusce tristique nunc at dignissim molestie.</em>
            </p>
          </Col>
          <Col md='2'>
            <p className='h4 mb-3'>Explore</p>
            <p>
              <NavLink className='nav-link'>Link One</NavLink>
            </p>
            <p>
              <NavLink className='nav-link'>Link Two</NavLink>
            </p>
            <p>
              <NavLink className='nav-link'>Link Three</NavLink>
            </p>
            <p>
              <NavLink className='nav-link'>Link Four</NavLink>
            </p>
          </Col>
          <Col md='2'>
            <p className='h4 mb-3'>Useful Links</p>
            <p>
              <NavLink className='nav-link'>Link One</NavLink>
            </p>
            <p>
              <NavLink className='nav-link'>Link Two</NavLink>
            </p>
            <p>
              <NavLink className='nav-link'>Link Three</NavLink>
            </p>
            <p>
              <NavLink className='nav-link'>Link Four</NavLink>
            </p>
          </Col>
          <Col md='4'>Footer Column Three</Col>
        </Row>
        <Row className='text-center copy py-3'>
          <Col>&copy; Right Reserved by Website name - 2023</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

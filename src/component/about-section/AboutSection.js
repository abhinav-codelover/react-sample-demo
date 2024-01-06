import React from 'react';
import { Button, Col, Container, Image ,Row } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col md='6' className='ps-0 d-flex align-items-center'>
          <Image src='/assets/images/700x300.jpeg' alt='about-section' className='about-img-pill' fluid />
        </Col>
        <Col md='6'>
          <div className='heading'>
            <div className='title-text'>About Us</div>
          </div>
          <figure>
            <blockquote className='blockquote'>
              <p>
                Welcome to our vibrant world of innovation, enthusiasm, and rapid growth! We are a passionate organization, driven by the desire to
                make a significant impact on the world. Our journey began with a simple yet powerful idea, and it has since blossomed into a dynamic
                force of change and progress.
              </p>
              <p>
                What sets us apart is our insatiable appetite for innovation. We thrive on pushing boundaries and reimagining what is possible. Our
                passion for what we do is infectious, and it drives us to achieve remarkable things each day.
              </p>
            </blockquote>
          </figure>
          <Button variant='dark' className='cta-button'>
            Know More &#10148;
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;

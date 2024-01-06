import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RiSeoLine } from 'react-icons/ri';
import { SiWebauthn } from 'react-icons/si';
import { LiaDigitalTachographSolid } from 'react-icons/lia';
import { AiOutlineDesktop } from 'react-icons/ai';
import { MdVideoSettings, MdOutlinePrivacyTip } from 'react-icons/md';

const ServicesSection = () => {
  return (
    <>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs='12' md='10' lg='8' xl='7' xxl='6'>
            <div className='heading'>
              <div className='title-text'>Services</div>
            </div>
            <p className='text-secondary mb-5 text-center'>
              We have a team of experienced and talented professionals who can help you with every aspect of the product development process, from
              ideation to prototyping to launch.
            </p>
            <hr className='w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle' />
          </Col>
        </Row>
      </Container>

      <div className='container'>
        <div className='row gy-5'>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='content-box text-center px-xl-2'>
              <RiSeoLine size='3em' />
              <h5 className='m-2'>SEO Consulting</h5>
              <p className='m-0 text-secondary'>
                We can help you to improve your website's visibility in search engine results pages (SERPs). This can lead to more traffic to your
                website.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='content-box text-center px-xl-2'>
              <SiWebauthn size='3em' />
              <h5 className='m-2'>Web Development</h5>
              <p className='m-0 text-secondary'>
                We can help you to design and develop a new website, or to update your existing website. We specialize in creating user-friendly
                websites.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='content-box text-center px-xl-2'>
              <LiaDigitalTachographSolid size='3em' />
              <h5 className='m-2'>Digital Strategy</h5>
              <p className='m-0 text-secondary'>
                We can help you to develop a digital strategy that will help you to achieve your business goals. This includes digital marketing for
                your business.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='content-box text-center px-xl-2'>
              <AiOutlineDesktop size='3em' />
              <h5 className='m-2'>Web Design</h5>
              <p className='m-0 text-secondary'>
                We can help you to create a visually appealing and user-friendly website. We take into account your brand identity and target
                audience.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='content-box text-center px-xl-2'>
              <MdVideoSettings size='3em' />
              <h5 className='m-2'>Digital Marketing</h5>
              <p className='m-0 text-secondary'>
                We can help you to promote your business online through a variety of digital marketing channels, including SEO, PPC, and email
                marketing.
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='content-box text-center px-xl-2'>
              <MdOutlinePrivacyTip size='3em' />
              <h5 className='m-2'>Media Production</h5>
              <p className='m-0 text-secondary'>
                We can help you to create high-quality videos, photos, and other media content. We can help you to distribute your content through a
                variety of channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;

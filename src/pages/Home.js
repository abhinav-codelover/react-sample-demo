import React from 'react'
import HomeBanner from '../component/banner/HomeBanner';
import AboutSection from '../component/about-section/AboutSection';
import ServicesSection from '../component/services-section/ServicesSection';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <section className='py-5 py-xl-8'>
        <AboutSection />
      </section>
      <section className='py-5 py-xl-8'>
        <ServicesSection />
      </section>
    </>
  );
}

export default Home
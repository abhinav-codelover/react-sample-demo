import React from 'react';
import Header from '../common/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../common/footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

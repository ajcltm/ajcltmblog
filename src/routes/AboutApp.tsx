import React from 'react';
import Reset from 'styled-reset';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import Footer from '../components/Footer';


function AboutApp() {
  const NavTitleProps = [{'title':'about', 'path':'archive/about'}]
  return (
    <div className='screen-grid'>
      <Nav navs={NavTitleProps}/>
      <Content gridColumn={6}/>
      <Aside />
      <Advertise />
    </div>
  );
}

export default AboutApp;
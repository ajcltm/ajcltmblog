import React from 'react';
import Reset from 'styled-reset';
import Nav from '../components/Nav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";

function ArchiveApp() {
  const NavTitleProps = [{'title':'about', 'path':'about'}]
  return (
    <div className='screen-grid'>
      <Nav navs={NavTitleProps}/>
      <Outlet />
      <Aside />
      <Advertise />
    </div>
  );
}

export default ArchiveApp;
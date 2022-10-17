import React from 'react';
import Reset from 'styled-reset';
import Nav from '../components/Nav';
import ArchiveNav from '../components/nav/ArchiveNav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";

function ArchiveApp() {
  type Contents = {
    id: string;
    title: string;
    content: string;
}
  // const Contents = [{id:'0001', 'title': 'newContent', 'content':'This is the content!'}]
  const Contents: Contents[] = []
  return (
    <div className='screen-grid'>
      <ArchiveNav admin={true} contents={Contents} />
      <Outlet />
      <Aside />
      <Advertise />
    </div>
  );
}

export default ArchiveApp;
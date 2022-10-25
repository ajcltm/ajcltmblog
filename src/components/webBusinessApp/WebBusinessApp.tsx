import React from 'react';
import {Outlet} from "react-router-dom";
import WebBusinessNav from './WebBusinessNav';

function WebBusinessApp() {

  return (
    <div className="screen-grid">
        <WebBusinessNav />
        <Outlet />
    </div>
  );
}

export default WebBusinessApp;
import React from 'react';
import {Link} from "react-router-dom"

function WebBusinessNav() {
    return (
        <div className="web-nav">
            <Link className="web-nav-item" to='theme'>Theme</Link>
            <Link className="web-nav-item" to='contact'>Contact</Link>
        </div>
    )
}

export default WebBusinessNav
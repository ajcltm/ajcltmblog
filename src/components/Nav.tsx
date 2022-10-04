import React from "react"
import {Outlet, Link} from "react-router-dom"

interface NavTitleProp {
    'title': string;
    'path': string;
}

interface NavTitleProps {
    'navs': Array<NavTitleProp>
}

export default function Nav(NavTitleProps:NavTitleProps) {
    const navElement = NavTitleProps.navs.map(NavTitleProp => {
        return <Link className='main-nav-item' to={NavTitleProp.path}>{NavTitleProp.title}</Link>
    })
    return (
        <nav className='main-nav'>
            <div className='main-nav-wraper'>
                {navElement}
            </div>
        </nav>
    )
}
import React from "react"
import {Outlet, Link} from "react-router-dom"

export default function Header() {
    
    const [loginData, setLoginData] = React.useState(
        {
            'id': "",
            'pw': ""
        }
    )

    function handleChange(event:any) {
        
        const {name, value} = event.target
        setLoginData(preLoginData => {
            return {
                ...preLoginData, [name]: value
            }
        }
            )
    }

    function handleSubmit(event:any) {
        event.preventDefault()
        console.log(loginData)

        fetch("http://localhost:8000")
        .then(res => res.json())
        .then(data => console.log(data))
    }
    

    return (
        <header className="main-head"> 
            <div className="main-head-wraper">
                <div className="main-head-title-wraper">
                    <Link className="main-head-title" to="/">Ajcltm Blog</Link>
                </div>
                <div className="main-menu-wraper">
                    <div className="main-menu-nav-wraper">
                        <Link className="main-menu-nav" to="about">About</Link>
                        <Link className="main-menu-nav" to="webBusiness">Web Business</Link>
                        <Link className="main-menu-nav" to="dataService">Data Service</Link>
                        <Link className="main-menu-nav" to="archive/about">Achieve</Link>
                    </div>
                    <form className="search-form">
                        <input className="search-input" type='text' name='search' placeholder="Search.."/>
                    </form>
                </div>
                <div className="head-profile-wraper">
                    <div className="dropdown" data-dropdown>
                        <button className="link" data-dropdown-button> Login </button>
                        <form className="dropdown-menu" onSubmit={handleSubmit}>
                            <label className="login-label">ID</label>
                            <input type='text' placeholder="id" name='id' className="login-input" onChange={handleChange} />
                            <label className="login-label">Password</label>
                            <input type='text' placeholder="password" name='pw' className="login-input" onChange={handleChange} />
                            <button className="login-submit">login</button>
                        </form>
                    </div>
                    <img className="head-profile" src='/images/icon.jpg'/>
                </div>
            </div>
        </header>
    )
}
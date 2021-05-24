import React from "react";
import { Link } from "react-router-dom";
import './style/NavBar.css'

const NavBar = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Easy tasks</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">All tasks</Link>
                    </li>
                </ul>
                <ul className="d-flex navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-success" to="/login">Log in</Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn" to="/singup">Sing Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default NavBar

import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import "bootstrap/js/src/collapse.js";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
  <Link className="navbar-brand" to="/">{props.Appname}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"   to='/About US'>{props.AboutusText}</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.ServicesText}
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Action</Link></li>
              <li><Link className="dropdown-item" to="/">Another action</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/">Something else here</Link></li>
            </ul>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>

        </form> */}
        <div className={`form-check form-switch text-${props.darkModeText}`}>
  <input className="form-check-input" type="checkbox" role="button" id="flexSwitchCheckDefault" onClick={props.changeMode }/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
{/* -------------------------------------------------------------------------------------------------------------------------  */}
{/* --------------------------------------we have a button for toggling dark and light mode and we have aboutus and home components in navbar but we cannot render those in webpage becz we use tailwind css for creating footer components ,
so that is why our exixting bootstrap component's class names are clashed with tailwind.
we need to fix it later on but if we renove tailwind specification form index.css then we can render those thing but we also need to remove footer component as well "></div>
-----------------------------------------------------------------------------------  */}
{/* -------------------------------------------------------------------------------------------------------------------------  */}
{/* -------------------------------------------------------------------------------------------------------------------------  */}


      </div>
    </div>
  </nav>
  )
}

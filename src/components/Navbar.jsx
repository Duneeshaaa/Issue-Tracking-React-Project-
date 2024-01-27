import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid px-5">
                <a className="navbar-brand" href="/">Issue Tracking System (Medical Issues)</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink className="nav-link" to="/issues">All Issues</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/addissue">Add Issue</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/updateissue">Update Issue</NavLink>
                </li>
            </ul>
         </div>
     </div> 
    </nav>

    </div>
  )
}

export default Navbar;
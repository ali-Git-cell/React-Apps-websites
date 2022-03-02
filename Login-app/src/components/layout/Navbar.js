
import {  NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                  <div className="container ">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                      <NavLink className="nav-link" to="/">Home </NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                      </li>
                      {/* <li className="nav-item">
                      <NavLink className="nav-link" to="/lists">Lists</NavLink>
                      </li> */}
                    </ul>
                  </div>
                  
                  </div>
                </nav>

    )
}

export default Navbar;


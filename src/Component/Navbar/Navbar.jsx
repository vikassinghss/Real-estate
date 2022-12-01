import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect , isAuthenticated , logout} = useAuth0();
  return (
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link
         to="/"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src="assets/img/icon-deal.png"
              alt="Icon"
              style={{ Width: "30px", Height: "30px" }}
            />
          </div>
          <h1 className="m-0 text-primary">Makaan</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link ">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <div className="nav-item dropdown">
              <Link to=""
                
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Property
              </Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/Propertylist" className="dropdown-item">
                  Property List
                </Link>
                <Link to="/Typepage" className="dropdown-item">
                  Property Type
                </Link>
                <Link to="/Agent" className="dropdown-item">
                  Property Agent
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="/service" className="dropdown-item">
                  Service
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          {
            isAuthenticated ? <button onClick={() => logout({ returnTo: window.location.origin })} className="btn btn-primary px-3 d-none d-lg-flex">
            Log Out 
          </button>  : <button onClick={() => loginWithRedirect()} className="btn btn-primary px-3 d-none d-lg-flex">
            Log in
          </button> 

          }
          
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

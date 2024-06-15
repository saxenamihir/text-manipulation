import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; //import link

// import moonImage from "bootstrap-icons/icons/moon-fill.svg";
// import sunImage from "bootstrap-icons/icons/sun-fill.svg";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>
        <div
          className="navbar-collapse"
          id="navbarNavDropdown"
          style={{
            width: "100%",
            display: "flex",
            // justifyContent: "end",
          }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          
        </div>
        <div className="d-flex">
            <div className="btn btn-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{ height: "30px", weight: "30px",cursor:'pointer' }}></div>
            <div className="btn btn-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{ height: "30px", weight: "30px",cursor:'pointer' }}></div>
            <div className="btn btn-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{ height: "30px", weight: "30px",cursor:'pointer' }}></div>
            <div className="btn btn-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{ height: "30px", weight: "30px",cursor:'pointer' }}></div>
            <div className="btn btn-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{ height: "30px", weight: "30px",cursor:'pointer' }}></div>
            <div className="btn btn-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{ height: "30px", weight: "30px",cursor:'pointer' }}></div>
          </div>
          {/* <div
            className={`form-check form-switch  text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <img
              src={props.mode === "light" ? moonImage : sunImage}
              onClick={props.toggleMode}
            />
          </div> */}

          {/* <div className={`form-check form-switch text-${props.mode='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox"
            id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div> */}

      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set the Title",
  aboutText: "About",
};

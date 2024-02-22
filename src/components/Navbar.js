import React from "react";
import PropTypes from "prop-types";
// import { a } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <buthrefn
            className="navbar-hrefggler"
            type="buthrefn"
            data-hrefggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="hrefggle navigation"
          >
            <span className="navbar-hrefggler-icon"></span>
          </buthrefn>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auhref">
              <li className="nav-item active">
                <a className="nav-a" href="#">
                   Home
                </a>
              </li> 
               <li className="nav-item">
                {/* <a className="nav-a" href="/About">
                  About
                </a> */}
              </li> 
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'} mx-5`}>
              <input
                className="form-check-input "
                type="checkbox"
                onClick={props.hrefggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className='form-check-label ' htmlFor="flexSwitchCheckDefault">
              dark Mode
              </label>
            </div>
          

          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set title here",
  nav: "Romwa",
};

import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  function closeNavbar() {
    var navNavbar = document.getElementById("navNavbar");
    var bootstrapButton = document.querySelector(".navbar-toggler");
    if (navNavbar.classList.contains("show")) {
      bootstrapButton.click(); // Click the button to close the Navbar
    }
  }

  function closeSearchbar() {
    var navNavbar = document.getElementById("mynavbar");
    var bootstrapButton = document.querySelector(".search-toggler");
    if (navNavbar.classList.contains("show")) {
      bootstrapButton.click(); 
    }
  }
  return (
    <header className="container-fluid navbar   navbar-expand-sm mb-4 justify-content-space-between ">
      <div className="container-fluid">
        <p className="logo h1">
          <NavLink to="/" className="site-logo">
            #VANLIFE
          </NavLink>
        </p>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navNavbar"
          aria-controls="navNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navNavbar"
        >
          <nav className="navbar-nav">
            <NavLink
              to="/host"
              className="px-2"
              onClick={closeNavbar}
              style={({ isActive }) => isActive ? activeStyle: null}
            >
              Host
            </NavLink>
            <NavLink
              to="/about"
              className="px-2"
              onClick={closeNavbar}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              About
            </NavLink>
            <NavLink
              to="Vans"
              className="px-2"
              onClick={closeNavbar}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              Vans
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

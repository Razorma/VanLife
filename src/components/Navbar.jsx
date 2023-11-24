import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
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
      bootstrapButton.click(); // Click the button to close the search
    }
  }
  return (
    <header className="container-fluid navbar   navbar-expand-sm mb-4 justify-content-space-between ">
      <div className="container-fluid">
        <p className="logo h1">
          <Link to="/" className="site-logo">
            #VANLIFE
          </Link>
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
            <Link to="/host" className="px-2" onClick={closeNavbar}>
              Host
            </Link>
            <Link to="/about" className="px-2" onClick={closeNavbar}>
              About
            </Link>
            <Link to="Vans" className="px-2" onClick={closeNavbar}>
              Vans
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

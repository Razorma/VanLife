import React from 'react'
import { NavLink } from 'react-router-dom'

const VanHostNavBar = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
      };
  return (
    <nav className="host-van-detail-nav ps-3">
            <NavLink
              to="."
              end
              className="px-2"
              style={({ isActive }) => isActive ? activeStyle: null}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className="px-2"
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className="px-2"
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              Photos
            </NavLink>
          </nav>
  )
}

export default VanHostNavBar
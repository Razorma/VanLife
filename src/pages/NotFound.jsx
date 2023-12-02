import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found-container my-3">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/" className="link-button mt-5">Return to Home</Link>
    </div>
  )
}

export default NotFound
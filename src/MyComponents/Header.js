import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Props are used to pass data from one component to another
// Here, we are passing title and searchBar as props to Header component from App.js
// Props are read-only. We cannot change the value of props in the component
// If we try to change the value of props, it will give an error
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {props.searchBar ? <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>:""}
        </div>
      </div>
    </nav>
  )
}

// if not mentioned in app.js, these default props will be used
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

// to check the type of props
// to make sure that the title is string
// and searchBar is boolean
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
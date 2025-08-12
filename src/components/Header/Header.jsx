import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    const location = useLocation();

  return (
    <header>
      {location.pathname === '/login' ? (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="#">
                    <div className="logo-mark">🚀</div>
                    <h1 className="heading ps-2 mb-0">KidsLearn</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <form className="header-form" type="submit">
                        <input className="form-control me-2" type="search" placeholder="🔍 Search courses,skills or topics..." aria-label="Search"/>
                    </form>&nbsp;&nbsp;

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item note-cntr">
                            <span className='note'>2</span>
                            <Link to=""><i class="bi bi-bell"></i></Link>
                        </li>&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <Link to="/home"><i class="bi bi-person"></i></Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
      ) : location.pathname === '/home' ? (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Header

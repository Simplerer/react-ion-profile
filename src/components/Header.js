import React from "react";

function Header({ pageChanger, currentPage }) {
  return (
    <div className="pt-3">
      <div className="card">
        <div className="card-body">
          <div className="col">
            <h1>Scott Stone</h1>
          </div>
        </div>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs justify-content-end">
            <li className="nav-item">
              <a className={currentPage == 'About' ? 'nav-link-active' : 'nav-link'}
                href="#about"
                onClick={() => pageChanger('About')}>About</a>
            </li>
            <li className="nav-item">
              <a className={currentPage == 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                href='#portfolio'
                onClick={() => pageChanger('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className={currentPage == 'Contact' ? 'nav-link-active' : 'nav-link'}
                href="#contact"
                onClick={() => pageChanger('Contact')}>Contact</a>
            </li>
            <li className="nav-item">
              <a className={currentPage == 'Resume' ? 'nav-link-active' : 'nav-link'}
                href="#resume"
                onClick={() => pageChanger('Resume')}>Artistic</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Header;
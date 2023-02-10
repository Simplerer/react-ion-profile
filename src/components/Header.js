import React from "react";

function Header({ pageChanger, currentPage }) {
  return (
    <div className="container">
      <div>

        <header className="row d-flex align-items-end m-4">
          <div className="col-lg-4 col-sm-12">
            <h1>Scott Stone</h1>
          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-between p-3 me-3">
          
              <a className={currentPage == 'About' ? 
              'nav-link-active' : 'nav-link'}
                href="#about"
                onClick={() => pageChanger('About')}
              >About</a>
              <a className={currentPage == 'Portfolio' ? 
              'nav-link-active' : 'nav-link'}
                href='#portfolio'
                onClick={() => pageChanger('Portfolio')}
              >Portfolio</a>
              <a className={currentPage == 'Contact' ? 
              'nav-link-active' : 'nav-link'}
                href="#contact"
                onClick={() => pageChanger('Contact')}
              >Contact</a>
              <a className={currentPage == 'Resume' ? 
              'nav-link-active' : 'nav-link'}
                href="#resume"
                onClick={() => pageChanger('Resume')}
              >Resume</a>
           
          </div>
        </header>
      </div>
    </div>
  )
};

export default Header;
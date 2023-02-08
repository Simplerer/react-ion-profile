import React from "react";

function Footer() {
  return (
    <div className="pt-3">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Light</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dark</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Artistic</a>
            </li>
          </ul>
        </div>
        <div className="card-body d-flex justify-content-center">
        <a href="https://www.linkedin.com/in/scott-stone-392156231/" target={"_blank"}><i className="fa fa-linkedin-square fa-3x p-2 me-2" aria-hidden="true"></i></a>
        <a href="https://github.com/Simplerer" target={"_blank"}><i className="fa fa-github fa-3x p2 m-2" aria-hidden="true"></i></a>
        <a href="https://stackoverflow.com/users/21167977/simplerer" target={"_blank"}><i className="fa fa-stack-overflow fa-3x p-2 ms-2" aria-hidden="true"></i></a>        
        </div>
      </div>
    </div>
  )


}





export default Footer; 